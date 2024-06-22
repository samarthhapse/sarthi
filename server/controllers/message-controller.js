import asyncHandler from 'express-async-handler';
import Message from '../models/message-model';
import Chat from '../models/chat-model';
import { Student } from '../models/student-model';
import { Expert } from '../models/expert-model';



// Function to get all messages in a chat
const allMessages = asyncHandler(async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate({
        path: "sender",
        select: "name avatar email",
        model: function(doc) {
          return doc.senderModel;
        }
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
    sender: req.user._id,
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
    }).execPopulate();

    message = await message.populate("chat").execPopulate();

    message = await Chat.populate(message, {
      path: "chat.users",
      select: "name avatar email",
      populate: {
        path: 'userModels',
        model: function(doc) {
          return doc.userModels;
        }
      }
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