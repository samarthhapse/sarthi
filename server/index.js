import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/connection.js";
import studentRoute from "./routes/studentRoute.js";
import expertRoute from "./routes/expertRoute.js";
import otpRoute from './routes/otpRoute.js';
import chatRoutes from './routes/chatRoutes.js';
import messageRoutes from './routes/messageRoute.js';
dotenv.config({});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/student/", studentRoute);
app.use("/api/v1/expert/", expertRoute);
app.use("/api/v1/otp/", otpRoute);
app.use("/api/v1/chat", chatRoutes);
app.use("/api/v1/message", messageRoutes);


app.listen(PORT, () => {
  connectDB().then(() => {
    console.log(`Server Listening on : http://localhost:${PORT}`);
  });
});

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: ["*"],
    methods: ["POST", "GET"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });

  socket.on("typing", (room) => socket.to(room).emit("typing"));
  socket.on("stop typing", (room) => socket.to(room).emit("stop typing"));

  socket.on("new message", (newMessageReceived) => {
    const chat = newMessageReceived.chat;

    if (!chat.users) {
      return console.log("chat.users not defined");
    }

    chat.users.forEach((user) => {
      if (user._id === newMessageReceived.sender._id) {
        return;
      }

      socket.to(user._id).emit("message received", newMessageReceived);
    });
  });

  socket.on("disconnect", () => {
    console.log("USER DISCONNECTED");
  });

  socket.on("setup", (userData) => {
    socket.leave(userData._id);
  });
});

