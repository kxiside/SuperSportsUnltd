const Super = require('../models/super')

// new
function newSuper(req, res) {
    console.log('new route')
    res.send('new supers page')
}
// create
// index
function index(req, res) {
    res.render('supers/index')
}
// export functions
module.exports = {
    new: newSuper,
    index
}