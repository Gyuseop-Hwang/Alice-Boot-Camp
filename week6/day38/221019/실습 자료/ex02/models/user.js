const mongoose = require('mongoose') 
const userSchema = 
mongoose.Schema({
  name: {
  type: String,
  required: true
  },
  species: {
    type: String,
    required: true
  }
})
// Export model
module.exports = mongoose.model('User', 
userSchema)
