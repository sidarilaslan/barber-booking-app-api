const Mongoose = require('mongoose');
const bookingSchema = new Mongoose.Schema({
    date: Date,
    lastName: String,
    requests: String,
    hour: String,
    user_id: {
        type: Mongoose.Types.ObjectId,
        ref: "users"
    },
    worker_id: {
        type: Mongoose.Types.ObjectId,
        ref: "workers"
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = Mongoose.model("bookings", bookingSchema);