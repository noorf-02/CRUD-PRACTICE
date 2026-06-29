const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT;

app.get('/', (req,res)=>{
    res.send(`this is the homepage running on ${port}`);
})

app.listen(port, ()=>{
    console.log(`App is running on ${port}`);
});