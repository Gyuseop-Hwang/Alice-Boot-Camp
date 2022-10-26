const express = require('express');

const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('DB Connected')
  })
  .catch(err => {
    console.log(err)
  })


app.listen("3000", (req, res) => {
  console.log('Listening on port 3000')
})