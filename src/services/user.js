const User = require('../models/user');

const insertUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
}

const listUser = async (where) => {
    const user = await User.find(where || {});
    return user;
}

const removeUser = async (id) => {
    return await User.findByIdAndDelete(id);
}


module.exports = {
    insertUser,
    listUser,
    removeUser
}