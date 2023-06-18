const Mongoose = require('mongoose');
const bookingSchema = new Mongoose.Schema({
    date: Date,
    name: String,
    requests: String,
    hour: String,
    user_id: {
        type: Mongoose.Types.ObjectId,
        ref: "users"
    },
    worker_id: {
        type: Mongoose.Types.ObjectId,
        ref: "workers"
    },
    isDone: {
        type: Boolean,
        default: false
    }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = Mongoose.model("bookings", bookingSchema);