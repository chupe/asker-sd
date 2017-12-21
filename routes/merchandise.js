const express = require('express'),
  router = express.Router(),
  Merchandise = require('../models/merchandise')

router.get('/', (req, res) => {
  Merchandise.find((err, docs) => {
    let merchParts = [],
      partSize = 3
    for (let i = 0; i < docs.length; i += partSize) {
      let part = docs.slice(i, i + partSize)
      merchParts.push(part)
    }
    let options = {
      title: 'Sportsko društvo ASKER',
      merch: merchParts
    }
    res.render('merchandise/index', options)
  })
})

module.exports = router