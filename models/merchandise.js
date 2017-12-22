const mongoose = require('mongoose'),
  Schema = mongoose.Schema

const defaults = {
  image: 'http://nba.frgimages.com/FFImage/thumb.aspx?i=/productImages/_2633000/ff_2633997a_full.jpg&w=340'
}

let merchSchema = new Schema({
  // id: { type: String, required: false },
  name: { type: String, required: true },
  price: { type: Number, required: false },
  image: { type: String, required: false, default: defaults.image },
  available: { type: Number, required: false }
})

let Merchandise = mongoose.model('Merchandise', merchSchema)

module.exports = Merchandise
