// products.controller.js (controller)
const Product = require('./products.model');

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().exec();
    res.send(products);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).exec();
    if (!product) {
      res.status(404).send({ message: 'Product not found' });
    } else {
      res.send(product);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    if (!product) {
      res.status(404).send({ message: 'Product not found' });
    } else {
      res.send(product);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id).exec();
    res.status(204).send({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
};