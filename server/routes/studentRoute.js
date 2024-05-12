import express from 'express'
import { changePassword, getAllStudents, login, register, studentDetails } from '../controllers/student-controller.js';

const router = express.Router();
router.post('/register',register)
router.post('/login',login)
router.post('/resetpassword',changePassword)
router.get('/:id',studentDetails)
router.get('/',getAllStudents)

export default router;