const Mongoose = require('mongoose');
const serviceSchema = new Mongoose.Schema({
    name: String,
    description: String,
    duration: String,
    price: Number,
    worker_id: {
        type: Mongoose.Types.ObjectId,
        ref: "workers"
    }

}, {
    versionKey: false,
});

module.exports = Mongoose.model("sevices", serviceSchema);