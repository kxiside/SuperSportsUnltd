const express = require('express')
const router = express.Router()
const superCtrl = require('../controllers/supersControl')


// NEW /supers/new
router.get('/new', superCtrl.new)

// CREATE

// INDEX
router.get('/', superCtrl.index)
// SHOW

// EDIT

// UPDATE

// DELETE

// EXPORT
module.exports = router
