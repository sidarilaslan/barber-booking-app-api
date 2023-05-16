const joi = require('joi');
const createValidation = joi.object({
    date: joi.date().required(),
    requests: joi.string().required(),
    hour: joi.string().required() //need refactor
});


module.exports = {
    createValidation
}







