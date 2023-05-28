const Service = require('../models/service');

const insertService = async (serviceData) => {
    const service = new Service(serviceData);
    return await service.save();
};

const listService = async (where) => {

    const services = await Service.find(where || {}).populate({
        path: "worker_id",
        select: "_id imageUrl points biography",
        populate: {
            path: "user_id",
            select: "-_id name lastName phoneNumber"
        }
    });

    return services;
}
module.exports = {
    insertService,
    listService
}