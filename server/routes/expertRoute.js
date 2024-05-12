import express from 'express'
import { changePassword, expertDetails, getAllExperts, login, register } from '../controllers/expert-controller.js';

const router = express.Router();
router.post('/register',register)
router.post('/login',login)
router.post('/resetpassword',changePassword)
router.get('/:id',expertDetails)
router.get('/',getAllExperts)

export default router;