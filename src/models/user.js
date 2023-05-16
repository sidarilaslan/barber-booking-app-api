const Mongoose = require('mongoose');
const userSchema = new Mongoose.Schema({
    name: String,
    lastName: String,
    phoneNumber: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = Mongoose.model("users", userSchema);