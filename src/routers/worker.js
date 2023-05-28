const express = require('express');
const router = express.Router();
const { createWorker, getWorker } = require('../controllers/worker');
const validate = require('../middlewares/validate');

const workerSchemas = require('../validations/worker');

router.
    route('/').
    get(getWorker);
router.
    route('/:_id').
    get(getWorker);
router.
    route('/').
    post(validate(workerSchemas.createValidation), createWorker);

module.exports = router;