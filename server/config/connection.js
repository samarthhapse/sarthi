import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}` || "");
    console.log("database connection established");
    
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};
export default connectDB;
