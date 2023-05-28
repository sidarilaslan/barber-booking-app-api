const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate');
const serviceSchema = require('../validations/service');
const { createService, getService } = require('../controllers/service');


router.
    route('/').
    get(getService);
router.
    route('/:id').
    get(getService);
router.
    route('/').
    post(validate(serviceSchema.createValidation), createService);




module.exports = router;