const { StatusCodes } = require('http-status-codes');

const validate = (schema) => (req, res, next) => {
    const { value, error } = schema.validate(req.body);

    if (error) {
        const errorMessage = error.details?.map(detail => detail.message).join(", ");
        res.status(StatusCodes.BAD_REQUEST).json({
            error: errorMessage
        });
    }
    else {
        Object.assign(req, value);
        return next();
    }
};

module.exports = validate;