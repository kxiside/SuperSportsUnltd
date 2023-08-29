const mongoose = require('mongoose')
const Schema = mongoose.Schema

const superSchema = new Schema({
    make: { type: String, required: true },
    model: { type: String },
    color: { type: String },
    capacity: { type: Number },
    hp: { type: Number },
    tq: { type: Number },
    price: { type: Number }
})

module.exports = mongoose.model('Super', superSchema)