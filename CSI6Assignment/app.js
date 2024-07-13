const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productsRouter = require('./routes/product.js');


let dbUrl = 'mongodb://localhost/mydatabase'; //mongoatlas ko iss variable m leke aaye hai
main()
  .then(() => {
    console.log("connected to the DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});