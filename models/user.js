const mongoose = require('mongoose'),
Schema = mongoose.Schema

let schema = new Schema({
  username: {type: String, required: true},
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {type: String, required: true},
  image: {type: String, required: true},
  phone_no: {type: Number, required: true}
})

module.exports = mongoose.model('User', schema)