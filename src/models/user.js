const Mongoose = require('mongoose');
const userSchema = new Mongoose.Schema({
    name: String,
    lastName: String,
    phoneNumber: Number
}, {
    versionKey: false,
    timestamps: true
});

module.exports = Mongoose.model("user ", userSchema);