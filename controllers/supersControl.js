const Super = require('../models/super')

module.exports = {
    index
}

async function index(req, res) {
    const supers = await Super.find({})
    res.render('index', { supers })
}