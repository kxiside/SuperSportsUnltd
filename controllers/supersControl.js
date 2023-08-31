const Super = require('../models/super')

// export functions
module.exports = {
    new: newSuper,
    index,
    show
}

// new
function newSuper(req, res) {
    console.log('new route')
    res.send('new supers page')
}

// index
function index(req, res) {
    res.render('supers/index')
}

// show
async function show(req, res) {
    Super.findById(req.params.id)
    res.render('supers/show')
}

