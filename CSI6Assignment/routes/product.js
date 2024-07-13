const express = require('express');
const router = express.Router();
const Product = require('../models/Product.js');

// CREATE
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating product' });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching product' });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating product' });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting product' });
  }
});

module.exports = router;