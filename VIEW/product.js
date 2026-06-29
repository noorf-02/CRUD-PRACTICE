// in view we create the routes, im practicing create and get so we will use the post and get 
// and we will use the routes from express

const express = require('express');
const Router = express.Router();
const { createProduct,  getProducts } = require('../CONTROLLER/product')

Router.post('/register', createProduct);
Router.get('/products', getProducts);

module.exports = Router; 