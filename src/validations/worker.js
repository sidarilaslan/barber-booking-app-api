const joi = require('joi');
const userValidationSchema = require('./user');
const createValidation = userValidationSchema.createValidation.keys({
    imageUrl: joi.string().required(),
    biography: joi.string().required(),
    availability: joi.boolean(),
    points: joi.number().required()
});


module.exports = {
    createValidation
}