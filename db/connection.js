//const mongoose = require('mongoose');
import mongoose from "mongoose";
mongoose.set('strictQuery', true);

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect('mongodb://127.0.0.1:27017/StdDB', {
             useUnifiedTopology: true,
             useNewUrlParser: true,});
        console.log("Database Create successfully")
        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

export default connectDB

