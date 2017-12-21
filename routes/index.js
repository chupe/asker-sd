const express = require('express'),
  router = express.Router(),
  User = require('../models/user')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home/index', {
    title: 'Sportsko društvo ASKER'
  })
})

router.get('/add_to_cart/:id', (req, res, next) => {
  let productId = req.params.id
})

module.exports = router
