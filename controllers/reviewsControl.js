const Super = require('../models/super')

module.exports = {
    create
}

async function create(req, res) {
    const superss = await Super.findById(req.params.id)
    superss.reviews.push(req.body)
    try {
        await superss.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/supers/${superss._id}`)
}

