import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: 'senderModel'
    },
    senderModel: {
      type: String,
      required: true,
      enum: ['Expert', 'Student']
    },
    content: { 
      type: String, 
      trim: true,
      required: true
    },
    chat: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Chat",
      required: true
    },
    readBy: [{
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'readByModel'
    }],
    readByModel: [{
      type: String,
      enum: ['Expert', 'Student']
    }]
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
