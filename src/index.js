// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants"
import connectDB from "./db/index.js";



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection faield !!! ", err);
})










/*
//1st approch
import express from "express";
const app = express()
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.log("Error ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listen in port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("ERROR ", error);
        throw err
    }
})()*/