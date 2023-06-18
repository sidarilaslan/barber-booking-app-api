const Mongoose = require('mongoose');
const userSchema = new Mongoose.Schema({
    name: String,
    lastName: String,
    phoneNumber: {
        type: String,
        unique: true
    },
    role: {
        type: String,
        enum: ["user", "worker", "admin"],
        default: "user"
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = Mongoose.model("users", userSchema);