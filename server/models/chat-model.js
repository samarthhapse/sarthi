import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: 'userModels'
    }],
    userModels: [{
      type: String,
      required: true,
      enum: ['Expert', 'Student']
    }],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'groupAdminModel'
    },
    groupAdminModel: {
      type: String,
      enum: ['Expert', 'Student']
    }
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
