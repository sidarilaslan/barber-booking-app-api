const Service = require('../models/service');

const insertService = (serviceData) => {
    const service = new Service(serviceData);
    return service.save();
};

module.exports = {
    insertService
}