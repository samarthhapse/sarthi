import asyncHandler from 'express-async-handler';
import Message from '../models/message-model.js';
import Chat from '../models/chat-model.js';
import { Student } from '../models/student-model.js';
import { Expert } from '../models/expert-model.js';



// Function to get all messages in a chat
const allMessages = asyncHandler(async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate({
        path: "sender",
        select: "name avatar email",
      })
      .populate("chat");
    res.json(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

// Function to send a message
const sendMessage = asyncHandler(async (req, res) => {
  const { content, chatId, senderModel } = req.body;

  if (!content || !chatId || !senderModel) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  const newMessage = {
    sender: req.body.user._id,
    senderModel: senderModel,
    content: content,
    chat: chatId,
  };

  try {
    let message = await Message.create(newMessage);

    message = await message.populate({
      path: "sender",
      select: "name avatar",
      model: senderModel
    })

    message = await message.populate("chat");

    message = await Chat.populate(message, {
      path: "chat.users",
      select: "name avatar email",
    });

    await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

    res.json(message);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

export default{
  allMessages,
  sendMessage
}