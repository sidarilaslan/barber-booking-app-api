const joi = require('joi');
const createValidation = joi.object({
    name: joi.string().required(),
    duration: joi.string().required(),
    description: joi.string().required(),
    price: joi.number().required()

});


module.exports = {
    createValidation
}







