const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate');
const serviceSchema = require('../validations/service');
const { create } = require('../controllers/service');

router.
    route('/').
    post(validate(serviceSchema.createValidation), create);



module.exports = router;