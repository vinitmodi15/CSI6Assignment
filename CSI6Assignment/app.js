// app.js (main application file)
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productController = require('./products.controller');

mongoose.connect('mongodb://localhost/products', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.post('/products', productController.createProduct);
app.get('/products', productController.getProducts);
app.get('/products/:id', productController.getProduct);
app.put('/products/:id', productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});