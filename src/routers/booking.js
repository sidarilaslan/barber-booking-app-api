const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate');
const bookingSchema = require('../validations/booking');
const { create } = require('../controllers/booking');

router.
    route('/').
    post(create);

module.exports = router;