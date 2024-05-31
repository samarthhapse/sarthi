import mongoose from "mongoose";

const expertsModel=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
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
    expertise: {
        type: String,
        enum:['Bug solving','Tech career assistance','Academic support'],
        required: true
      },
      field: {
        type: String,
        required: true
      },
      jobTitle: {
        type: String,
        default:null
      },
      connectedStudents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
},{timestamps:true})

export const Expert = mongoose.model("Expert", expertsModel);