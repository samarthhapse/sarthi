import mongoose from "mongoose";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from "./config/connection.js";
import studentRoute from './routes/studentRoute.js';
import expertRoute from './routes/expertRoute.js';
dotenv.config({});

const app=express()
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors())

app.use('/api/v1/student/',studentRoute)
app.use('/api/v1/expert/',expertRoute)

app.listen(PORT, () => {
    connectDB()
        .then(() => {
            console.log(`Server Listening on : http://localhost:${PORT}`)
        })
})