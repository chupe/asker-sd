const express = require('express'),
  router = express.Router(),
  Merchandise = require('../models/merchandise'),
  Cart = require('../models/cart')

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('session cart', req.session.cart)
  res.render('home/index', {
    title: 'Sportsko društvo ASKER'
  })
})

router.get('/add_to_cart/:id', (req, res, next) => {
  let productId = req.params.id,
    // cart = new Cart(false)
    cart = new Cart(req.session.cart ? req.session.cart : false)
  console.log('session cart', req.session.cart)

  Merchandise.findById(productId, (err, merchandise) => {
    if (err) {
      return res.redirect('/')
    }
    cart.addItem(merchandise)
    req.session.cart = cart
    res.redirect('/merchandise')
  })
})

module.exports = router
