const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate');
const schemas = require('../validations/user');
const { create } = require('../controllers/user');

router.
    route('/').
    post(validate(schemas.createValidation), create);


module.exports = router;