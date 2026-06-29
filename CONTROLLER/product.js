const product = require('../MODEL/Product');

const createProduct = async (req,res)=>{
    const { title, description,image,category,price } = req.body;
    const createdProduct = await product.create({title:title, description:description,image:image,category:category,price:price});
    res.send(createdProduct)
}

const getProducts = async (req,res)=>{
    const data = await product.find({});
    res.send(data);
}

module.exports = { createProduct,getProducts }