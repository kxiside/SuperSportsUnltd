const express = require('express')
const router = express.Router()
const superCtrl = require('../controllers/supersControl')


// NEW /supers/new
router.get('/new', superCtrl.new)

// INDEX
router.get('/', superCtrl.index)

// SHOW
router.get('/:id', superCtrl.show)
// EDIT

// UPDATE

// DELETE

// EXPORT
module.exports = router
