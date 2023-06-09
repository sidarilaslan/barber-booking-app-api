const joi = require('joi');
const createValidation = joi.object().keys({
    name: joi.string().required(),
    lastName: joi.string().required(),
    phoneNumber: joi.string().length(10).pattern(/^[0-9]+$/).required(),
    role: joi.string().equal("user", "worker", "admin")
});


module.exports = {
    createValidation
}