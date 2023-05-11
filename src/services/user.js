const User = require('../models/user');

const insert = (userData) => {
    const user = new User(userData);
    return user.save();
};

module.exports = {
    insert
}