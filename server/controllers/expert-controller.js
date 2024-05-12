import { Expert } from "../models/expert-model.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Student } from "../models/student-model.js";

export const register = async (req, res) => {
    
    try {
        let user,checkStudent;
        const { name, email, phoneNo, expertise, field, college, jobTitle, password, confirmPassword } = req.body;
        if (!name || !email || !password || !confirmPassword || !phoneNo || !expertise || !field || !college || !jobTitle) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password do not match", success: false });
        }
        user = await Expert.findOne({ email });
        checkStudent=await Student.findOne({email});
        if (user || checkStudent) {
            return res.status(400).json({ message: "Email already exist, try different email", success: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        user = await Expert.create({
            name,
            email,
            phoneNo,
            password: hashedPassword,
            expertise,
            field,
            college,
            jobTitle
        })
        if (!user) {
            return res.status(500).json({ message: "internal server error", success: false })
        }
        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        })
    }
    catch (err) {
        return res.status(500).json({ message: "internal server error", err, success: false })
    }
}

export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        };
        const user = await Expert.findOne({ email });
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

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

        if (!token) {
            return res.status(500).json({ message: "internal server error", success: false })
        }
        return res.status(200).json({ token: token,message:"logged in successful.", success: true })
    }
    catch (err) {
        return res.status(500).json({ message: "internal server error", err, success: false })
    }

}

export const changePassword = async (req, res) => {

    try {
        const { email, current_password, new_password } = req.body;
        const user = await Expert.findOne({ email })
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
        return res.status(400).json({ message: "internal server error", err, success: false })
    }
}

export const expertDetails=async(req,res)=>{
    const userID=req.params.id;
    try{
    const user=await Expert.findById(userID).select('-password')
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

 export const getAllExperts=async(req,res)=>{
    try{
      const user=await Expert.find()
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