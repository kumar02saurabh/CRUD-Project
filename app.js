require('dotenv').config();

const express = require ('express');

const cors =require("cors")

const connect=require('./config/db.js')

const app= express()

//Express Middleware 
app.use (express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// init connection to DB 
connect

const userRoutes = require('./routes/userRoutes.js')

app.use('/',userRoutes);


module.exports = app