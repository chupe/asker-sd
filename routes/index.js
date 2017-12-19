const express = require('express'),
  router = express.Router(),
  User = require('../models/user')

/* GET home page. */
router.get('/', function (req, res, next) {
  User.find((err, docs) => {    
    let usersParts = [],
      partSize = 3
    for (let i = 0; i < docs.length; i += partSize) {
      let part = docs.slice(i, i + partSize)
      usersParts.push(part)
    }
    let options = {
      title: 'Sportsko društvo ASKER',
      users: usersParts
    }
    res.render('members/index', options)
  })
})

module.exports = router
