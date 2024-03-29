const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on('connection', function() {
    console.log(`Connected to MongoDb ${db.name} at ${db.host}:${db.port}`)
})

module.exports = mongoose