// this is where the schema is created

const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema ({
    title: String,
    Description: String,
    image: String,
    Category: String,
    Price: Number,
});

// after the schema is created we convert it to model so it can be exported 

const product = mongoose.model('product', productSchema);
module.exports = product; 