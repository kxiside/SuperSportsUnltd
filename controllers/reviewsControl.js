const Super = require('../models/super')

module.exports = {
    create
}

async function create(req, res) {
    const super = await Super.findById(req.params.id)
    super.reviews.push(req.body)
    try {
        await super.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/supers/${super._id}`)
}