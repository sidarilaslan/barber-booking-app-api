const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate');
const userSchemas = require('../validations/user');
const { create } = require('../controllers/user');

router.
    route('/').
    post(validate(userSchemas.createValidation), create);


module.exports = router;