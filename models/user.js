const mongoose = require('mongoose'),
  connection = require('../db'),
  Schema = mongoose.Schema,
  bcrypt = require('bcrypt-nodejs')

const defaults = {
  image: 'https://cdn4.iconfinder.com/data/icons/professions-2-2/151/81-512.png'
}
  
let userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: false },
  first_name: { type: String, required: false },
  last_name: { type: String, required: false },
  image: { type: String, required: false, default: defaults.image },
  phone_no: { type: Number, required: false }
})

userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5))
}

userSchema.methods.validPassword = (password) => {
  return bcrypt.compareSync(password, this.password)
}

let User = mongoose.model('User', userSchema)

module.exports = User
