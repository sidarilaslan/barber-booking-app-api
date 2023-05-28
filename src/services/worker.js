const Worker = require('../models/worker');
const userService = require('./user');

const insertWorker = async (workerData) => {
    const user = await userService.insertUser(workerData);
    workerData.user_id = user._id;

    const worker = new Worker(workerData);
    const workerResponse = worker.save();

    return workerResponse.populate("user_id");
};

const listWorker = async (where) => {
    const worker = await Worker.find(where || {}).populate({
        path: "user_id"
    });
    return worker;
}

module.exports = {
    insertWorker,
    listWorker
}