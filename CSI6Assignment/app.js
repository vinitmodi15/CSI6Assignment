const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const studentRouter = require('./routes/student');
const dbUrl='mongodb://localhost:27017/node'
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

app.use(bodyParser.json());
app.use('/students', studentRouter); 


const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});