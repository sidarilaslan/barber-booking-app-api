const User = require('../models/user');

const insertUser = (userData) => {
    const user = new User(userData);
    return user.save();
};

module.exports = {
    insertUser
}