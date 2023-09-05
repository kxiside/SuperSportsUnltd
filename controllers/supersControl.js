const Super = require('../models/super')

// export functions
module.exports = {
    index,
    show,
    new: newSuper,
    delete: deleteOne,
    create
}



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
    res.render('supers/new')
}

function deleteOne(req, res) {
    Super.findById(req.params.id)
    .then(supers => {
        if(req.user && supers.owner == req.user.id) {
            return supers.deleteOne()
        } else {
            res.send('error')
        }
    }) 
    .then(data => {
        console.log(data)
        res.redirect('/supers')
    })
    .catch(error => console.error)
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    try {
        const superss = await Super.create(req.body)
        res.redirect(`/supers`)
    } catch (err) {
        console.log(err)
        res.render('supers/new', { errorMsg: err.message })
    }
}



