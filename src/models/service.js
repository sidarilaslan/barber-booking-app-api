const Mongoose = require('mongoose');
const serviceSchema = new Mongoose.Schema({
    name: String,
    description: String,
    duration: String,
    price: Number
}, {
    versionKey: false,
});

module.exports = Mongoose.model("sevices", serviceSchema);