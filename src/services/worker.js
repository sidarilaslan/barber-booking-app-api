const Worker = require('../models/worker');
const User = require('../models/user');

const insertWorker = async (workerData) => {
    const user = new User(workerData);
    workerData.user_id = user._id;
    return user.save().then(() => {
        const worker = new Worker(workerData);
        console.log(worker);
        return worker.save();
    });
};

module.exports = {
    insertWorker
}