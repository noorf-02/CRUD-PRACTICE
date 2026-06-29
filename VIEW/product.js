// in view we create the routes, im practicing create and get so we will use the post and get 
// and we will use the routes from express

const express = require('express');
const router = express.router();

router.post('/register', createProduct);
router.get('/products', getProducts);

module.exports = router; 