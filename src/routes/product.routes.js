// src/routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// Route to get products by videoId
router.get('/:videoId/products', productController.getProductsByVideoId);
// Route to create a new product for a specific videoId
router.post('/:videoId/products', productController.createProduct);

module.exports = router;
    