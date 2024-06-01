import { Expert } from "../models/expert-model.js";
import OTP from "../models/otp-model.js";
import { Student } from "../models/student-model.js";
import otpGenerator from 'otp-generator'
import nodemailer from 'nodemailer'
import {otpTemplate} from '../utils/emailTemplates.js'
const sendOTP = async (req, res) => {
    // try {
        const { email } = req.body;
        const expertExists = await Expert.findOne({ email })
        const studentExists = await Student.findOne({ email })
        if (expertExists || studentExists) {
            return res.status(401).json({
                success: false,
                message: "User already registered.",
            });
        }

        // generating a unique otp
        let otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false
        })
        let result = await OTP.findOne({ otp })
        while (result) {
            let otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            });
            result = await OTP.findOne({ otp });
        }
        const otpSent = await OTP.create({
            email,
            otp
        })
        if (!otpSent) {
            return res.status(500).json({ message: "internal server error", success: false, err })
        }

        // now sending otp using nodeMailer

        let transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port:465,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            }
        })

        let info = await transporter.sendMail({
            from: 'Sarthi',
            to: `${email}`,
            subject: 'Verification email from Sarthi',
            html: otpTemplate(otp)
        })
        if (!info) {
            return res.status(500).json({ message: "internal server error", success: false, err })
        }

        return res.status(200).json({
            success: true,
            message: "OTP Sent Successfully",
            otp,
        })
    // }
    // catch (err) {
    //     return res.status(500).json({ message: "internal server error", success: false, err });
    // }
}

export default sendOTP