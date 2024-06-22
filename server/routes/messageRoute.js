import express from 'express'
import messagecontroller from '../controllers/message-controller'

const router = express.Router();

// Route to get all messages for a specific chat
router.get('/:chatId',messagecontroller.allMessages);

// Route to send a new message
router.post('/',messagecontroller.sendMessage);

export default router;
