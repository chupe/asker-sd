//@ts-check
const User = require('../models/user'),
  mongoose = require('mongoose')

mongoose.connect('localhost:27017/asker-sd')

let users = [
  new User({
    image: 'https://cdn4.iconfinder.com/data/icons/professions-2-2/151/81-512.png',
    username: 'chupe',
    first_name: 'Adnan',
    last_name: 'Supic',
    email: 'adnan.supic@gmail.com',
    phone_no: 61355800
  }),
  new User({
    image: 'https://cdn4.iconfinder.com/data/icons/professions-2-2/151/81-512.png',
    username: 'JasminR',
    first_name: 'Jasmin',
    last_name: 'Rondic',
    email: 'jasmin@gmail.com',
    phone_no: 61355544
  }),
  new User({
    image: 'https://cdn4.iconfinder.com/data/icons/professions-2-2/151/81-512.png',
    username: 'Full',
    first_name: 'Enver',
    last_name: 'Hebibovic',
    email: 'full@gmail.com',
    phone_no: 61345624
  }),
]

let done = 0

for (let i = 0; i < users.length; i++) {
  users[i].save((err, result) => {
    done++
    if (done === users.length){
      exit()
    }
  })
}

function exit() {
  mongoose.disconnect()
}