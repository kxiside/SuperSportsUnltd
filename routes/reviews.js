const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controllers/reviewsControl')

router.post('/supers/:id/reviews', reviewsCtrl.create)

module.exports = router