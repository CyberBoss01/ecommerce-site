// routes/products.js
const router = require("express").Router();
const Product = require("../models/product");

// CREATE PRODUCT (ADMIN)
router.post("/", async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
});

// GET PRODUCTS
router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

module.exports = router;