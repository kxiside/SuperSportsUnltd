const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    }
    }, {
        timestamps: true
})

const superSchema = new Schema({
    make: { type: String, required: true },
    model: { type: String },
    color: { type: String },
    cc: { type: Number },
    hp: { type: Number },
    tq: { type: Number },
    price: { type: String },
    img: { type: String },
    desc: { type: String },
    imgShow: { type: String },
    reviews: [reviewSchema]
})

module.exports = mongoose.model('Super', superSchema)