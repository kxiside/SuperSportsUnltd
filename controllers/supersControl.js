const Super = require('../models/super')





// index
async function index(req, res) {
    const supers = await Super.find({})
    res.render('supers/index', { supers })
}

// show
async function show(req, res) {
  const superss = await Super.findById(req.params.id)
  res.render('supers/show', { superss })
}

// new
function newSuper(req, res) {
    console.log('new route')
    res.render('supers/new')
}



// export functions
module.exports = {
    new: newSuper,
    index,
    show
}