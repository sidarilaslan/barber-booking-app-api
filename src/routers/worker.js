const express = require('express');
const router = express.Router();
const { bookingList, create } = require('../controllers/worker');
const validate = require('../middlewares/validate');

const workerSchemas = require('../validations/worker');

router.
    route('/').
    post(validate(workerSchemas.createValidation), create);

module.exports = router;