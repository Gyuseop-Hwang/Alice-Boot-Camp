// Require express
const express = require('express')

// Require mongoose
const mongoose = require("mongoose");

// Initialize express
const app = express()

// parse json objects
app.use(express.json()) 

//set port number
const port_number = 8080

//set mongo connection information([mongoDB name]:[address]:[mongoDB port])
const mongo_connection_info = 'mongodb://localhost:27017'

// parse url encoded objects- data sent through the url
app.use(express.urlencoded({ extended: true}))

// create a server
const PORT = port_number
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT  }`)
  mongoose
  .connect(
    mongo_connection_info
  )
  .then(() => console.log('connected to database successfully'))
  .catch((err) => {
    console.log(err);
  });

});
