import { Student } from "../models/student-model.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Expert } from "../models/expert-model.js";
import OTP from "../models/otp-model.js";

export const register = async (req, res) => {
   
   // try {
      let user,checkExpert;

      const { name, email, phoneNo, password, confirmPassword,otp} = req.body;

      if (!name || !email || !password || !phoneNo || !confirmPassword ) {
         return res.status(400).json({ message: "All fields are required", success: false });
      }
      // if (password !== confirmPassword) {
      //    return res.status(400).json({ message: "Password do not match", success: false });
      // }
      user = await Student.findOne({ email });
      checkExpert=await Expert.findOne({email});
      if (user || checkExpert) {
         return res.status(400).json({ message: "Email already exist, try different email", success: false });
      }
      const recentOtp = await OTP.findOne({ email })
      .sort({ createdAt: -1 })
      .limit(1);
      if (!recentOtp) {
         return res.status(400).json({
           success: false,
           message: "OTP Not Found!",
         });
       }
       if (otp !== recentOtp.otp) {
         return res.status(400).json({
           success: false,
           message: "Invalid OTP",
         });
       }

      const hashedPassword = await bcrypt.hash(password, 10);

      user = await Student.create({
         name,
         email,
         phoneNo,
         password: hashedPassword
      })
      
      if (!user) {
         return res.status(500).json({ message: "internal server error", success: false })
      }
      return res.status(201).json({
         message: "Account created successfully.",
         success: true
      })
   // }
   // catch (err) {
   //    return res.status(500).json({ message: "internal server error", err, success: false })
   // }
}

export const login = async (req, res) => {

    try {
      const { email, password } = req.body;
      if (!email || !password) {
         return res.status(400).json({ message: "All fields are required", success: false });
      };
      const user = await Student.findOne({ email });
      if (!user) {
         return res.status(400).json({
            message: "Incorrect username or password",
            success: false
         })
      };
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
         return res.status(400).json({
            message: "Incorrect username or password",
            success: false
         })
      };
      const tokenData = {
         userId: user._id
      };

      const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

      if (!token) {
         return res.status(500).json({ message: "internal server error", success: false })
      }
      return res.status(200).json({ token: token, message:"logged in successful.",success: true })
   }
   catch (err) {
      return res.status(500).json({ message: "internal server error", err, success: false })
   }

}

export const changePassword = async (req, res) => {

   try {
      const { email, current_password, new_password,confirm_new_password } = req.body;

      if(new_password!==confirm_new_password)
         {
            return res.status(400).json({
               message: "Confirm password do not match.",
               success: false
            })
         }
      const user = await Student.findOne({ email })
      if (!user) {
         return res.status(400).json({ message: "No user found!", success: false });
      }
      const isPasswordMatch = await bcrypt.compare(current_password, user.password);
      if (!isPasswordMatch)
         return res.status(400).json({
            message: "Current password is incorrect.",
            success: false
         })
      const new_hash_pass = await bcrypt.hash(new_password, 10);
      user.password = new_hash_pass
      await user.save()

      return res.status(200).json({ message: "password changed successfully.", success: true })
   }
   catch (err) {
      return res.status(500).json({ message: "internal server error", err, success: false })
   }
}

export const studentDetails=async(req,res)=>{
   const userID=req.params.id;
   try{
   const user=await Student.findById(userID).select('-password')
   if(!user)
      {
         return res.status(500).json({ message: "internal server error", err, success: false })
      }
      return res.status(200).json({ userDetails:user,success: true })
   }
   catch(err)
   {
      return res.status(500).json({ message: "internal server error", err, success: false })
   }
}

export const getAllStudents=async(req,res)=>{
   try{
     const user=await Student.find()
     if(!user)
      {
         return res.status(500).json({ message: "internal server error", err, success: false })
      }
      return res.status(200).json({user})
   }
   catch(err)
   {
      return res.status(500).json({ message: "internal server error", err, success: false })
   }
}