const express = require('express'),
  router = express.Router(),
  User = require('../models/user'),
  csrf = require('csurf'),
  passport = require('passport')

let csrfProtection = csrf({})
router.use(csrfProtection)

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

router.get('/user/signup', (req, res, next) => {
  res.render('user/signup', {csrfToken: req.csrfToken()})
})

router.post('/user/signup', passport.authenticate('local.signup', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}))

router.get('/user/profile', (req, res, next) => {
  res.render('user/profile')
})

module.exports = router
