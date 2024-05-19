import mongoose from "mongoose";

const studentModel=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phoneNo:{
        type:String,
        required:[true,"Phone is required"],
        minLength:[10,"Phone no must be 10 characters long"],
        maxLength:[10,"Phone no must be 10 characters long"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[6,"Password must be atleast 6 characters long"]
    },
    connectedExperts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expert'
    }]
},{timestamps:true})

export const Student = mongoose.model("Student", studentModel);