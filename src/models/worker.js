const Mongoose = require('mongoose');

const bookingSchema = new Mongoose.Schema({
    imageUrl: String,
    points: Mongoose.Types.Decimal128,
    biography: String,
    availabilty: Boolean,
    user_id: {
        type: Mongoose.Types.ObjectId,
        ref: "users"
    }

}, {
    versionKey: false,
});

module.exports = Mongoose.model("workers", bookingSchema);