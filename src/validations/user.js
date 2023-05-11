const joi = require('joi');
const createValidation = joi.object({
    name: joi.string().required(),
    lastName: joi.string().required(),
    phoneNumber: joi.string().length(11).pattern(/^[0-9]+$/).required()
});


module.exports = {
    createValidation
}