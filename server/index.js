import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/connection.js";
import studentRoute from "./routes/studentRoute.js";
import expertRoute from "./routes/expertRoute.js";
import otpRoute from "./routes/otpRoute.js";
dotenv.config({});

const app = express();
// const PORT = process.env.PORT || 5000;
const PORT = 5001;

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
app.listen(PORT, () => {
  connectDB().then(() => {
    console.log(`Server Listening on : http://localhost:${PORT}`);
  });
});
