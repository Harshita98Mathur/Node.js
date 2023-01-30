//const express = require('express');
import express from 'express'
const app = express()
import connectDB from "./db/connection.js";
import { join } from 'path'
import routes from "./routes/routes.js";
const port = process.env.PORT || '3000'

// mongodb connection
connectDB();

app.use(express.urlencoded({extended: false})) // parses incoming request with urlencoded

//stattic files
app.use('/student',express.static(join(process.cwd(),"public")))
app.use('/student/edit',express.static(join(process.cwd(),"public")))

//Set template Engine
app.set("view engine", "ejs");

//Load Routes
app.use("/student", routes)

app.listen(port, () => {
    console.log(`Server listening at : ${port}`)
})