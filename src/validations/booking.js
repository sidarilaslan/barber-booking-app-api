const joi = require('joi');
const createValidation = joi.object({
    user_id: joi.string().required(),
    worker_id: joi.string().required(),
    date: joi.date().required(),
    requests: joi.string(),
    hour: joi.string().required(),
    name: joi.string().required()
});


module.exports = {
    createValidation
}







