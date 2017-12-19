const mongoose = require('mongoose'),
  dontenv = require('dotenv').config()

mongoose.Promise = global.Promise

let user = process.env.MONGO_USERNAME,
  pass = process.env.MONGO_PASSWORD,
  srv1 = process.env.MONGO_1,
  srv2 = process.env.MONGO_2,
  srv3 = process.env.MONGO_3

console.log('DB script initialized')

let uri = `mongodb://${user}:${pass}@${srv1},${srv2},${srv3}`
let local = 'mongodb://127.0.0.1:27017/asker-sd'

mongoose.connect(uri, { useMongoClient: true })
let connection = mongoose.connection

module.exports.mongoose = connection