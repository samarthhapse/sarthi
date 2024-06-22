import express from "express";
import { accessChat,fetchChats,createGroupChat,renameGroup,removeFromGroup,addToGroup } from "../controllers/chat-controller.js";

const router = express.Router();

// Route to create or fetch one-to-one chat
router.post('/',accessChat);

// Route to fetch all chats for the logged-in user
router.get('/',fetchChats);

// Route to create a new group chat
router.post('/group',createGroupChat);

// Route to rename a group chat
router.put('/rename',renameGroup);

// Route to remove a user from a group chat
router.put('/groupremove',removeFromGroup);

// Route to add a user to a group chat
router.put('/groupadd',addToGroup);

export default router;
