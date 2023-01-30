import mongoose from "mongoose";

//Defining schema
const studentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number, required:true, min:18, max:60},
    course:{type:String, required:true, trim:true},
    gender:{type:String, required:true, trim:true},
    fees:{type:Number, required:[true, 'fess is not less than 5000'], validate: (value)=> value >=5000}    
})

//Model
const StudentModel = mongoose.model("StudentData", studentSchema)

export default StudentModel