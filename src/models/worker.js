const Mongoose = require('mongoose');

const bookingSchema = new Mongoose.Schema({
    imageUrl: String,
    points: {
        type: Number,
        get: v => parseFloat(v).toFixed(1),
        set: v => parseFloat(v).toFixed(1)
    },
    biography: String,
    availabilty: { type: Boolean, default: true },
    user_id: {
        type: Mongoose.Types.ObjectId,
        ref: "users"
    }

}, {
    versionKey: false,
});

module.exports = Mongoose.model("workers", bookingSchema);