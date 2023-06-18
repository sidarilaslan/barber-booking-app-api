const express = require('express');
const router = express.Router();
const { createWorker, getWorker, deleteWorker } = require('../controllers/worker');
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
router.
    route('/:_id').
    delete(deleteWorker);

module.exports = router;