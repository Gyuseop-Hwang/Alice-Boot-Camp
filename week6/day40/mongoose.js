
const { Schema } = require('mongoose');

const PostSchema = new Schema({
  title: String,
  content: String,
}, {
  timeStamps: true,
  collection: 'customName'
})