const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./DATABASE/dbconfig');
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
connectDB();  

app.get('/', (req,res)=>{
    res.send(`this is the homepage running on ${port}`);
})

app.listen(port, ()=>{
    console.log(`App is running on ${port}`);
});