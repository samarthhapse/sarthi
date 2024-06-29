import { Student } from "../models/student-model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Expert } from "../models/expert-model.js";
import OTP from "../models/otp-model.js";

export const register = async (req, res) => {
    try {
        const {
            name,
            email,
            phoneNo,
            password,
            confirmPassword,
            otp,
            GoogleLogin,
        } = req.body;

        if (!GoogleLogin) {
            if (!name || !email || !password || !phoneNo || !confirmPassword) {
                return res.status(400).json({
                    message: "All fields are required",
                    success: false,
                });
            }
            if (password !== confirmPassword) {
                return res.status(400).json({
                    message: "Passwords do not match",
                    success: false,
                });
            }
        }

        const user = await Student.findOne({ email });
        const checkExpert = await Expert.findOne({ email });

        if (user || checkExpert) {
            return res.status(400).json({
                message: "Email already exists, try a different email",
                success: false,
            });
        }

        if (!GoogleLogin) {
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
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await Student.create({
            name,
            email,
            phoneNo,
            password: hashedPassword,
        });

        if (!newUser) {
            return res.status(500).json({
                message: "Internal server error",
                success: false,
            });
        }

        return res.status(201).json({
            message: "Account created successfully.",
            success: true,
        });
    } catch (err) {
        console.log("Error while registering: ", err);
        return res.status(500).json({
            message: "Internal server error",
            err,
            success: false,
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password, GoogleLogin } = req.body;

        if (!email || (!GoogleLogin && !password)) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }

        const user = await Student.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "No user with the given email. Try signing up",
                success: false,
            });
        }

        if (!GoogleLogin) {
            const isPasswordMatch = await bcrypt.compare(
                password,
                user.password
            );
            if (!isPasswordMatch) {
                return res.status(400).json({
                    message: "Incorrect username or password",
                    success: false,
                });
            }
        }

        const tokenData = { userId: user._id };
        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
            expiresIn: "1d",
        });
        const userData = await Expert.findById(user._id).select("-password");

        return res.status(200).json({
            token,
            userData,
            message: "Logged in successfully.",
            success: true,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            err,
            success: false,
        });
    }
};

export const changePassword = async (req, res) => {
    try {
        const { email, current_password, new_password, confirm_new_password } =
            req.body;

        if (new_password !== confirm_new_password) {
            return res.status(400).json({
                message: "Confirm password do not match.",
                success: false,
            });
        }
        const user = await Student.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ message: "No user found!", success: false });
        }
        const isPasswordMatch = await bcrypt.compare(
            current_password,
            user.password
        );
        if (!isPasswordMatch)
            return res.status(400).json({
                message: "Current password is incorrect.",
                success: false,
            });
        const new_hash_pass = await bcrypt.hash(new_password, 10);
        user.password = new_hash_pass;
        await user.save();

        return res
            .status(200)
            .json({ message: "password changed successfully.", success: true });
    } catch (err) {
        return res
            .status(500)
            .json({ message: "internal server error", err, success: false });
    }
};

export const studentDetails = async (req, res) => {
    const userID = req.params.id;
    try {
        const user = await Student.findById(userID).select("-password");
        if (!user) {
            return res.status(500).json({
                message: "internal server error",
                err,
                success: false,
            });
        }
        return res.status(200).json({ userDetails: user, success: true });
    } catch (err) {
        return res
            .status(500)
            .json({ message: "internal server error", err, success: false });
    }
};

export const getAllStudents = async (req, res) => {
    try {
        const user = await Student.find();
        if (!user) {
            return res.status(500).json({
                message: "internal server error",
                err,
                success: false,
            });
        }
        return res.status(200).json({ user });
    } catch (err) {
        return res
            .status(500)
            .json({ message: "internal server error", err, success: false });
    }
};
