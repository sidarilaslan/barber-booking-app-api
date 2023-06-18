const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate');
const bookingSchema = require('../validations/booking');
const { createBooking, getBooking, deleteBooking } = require('../controllers/booking');


router.
    route('/').
    get(getBooking);
router.
    route('/:_id').
    get(getBooking);
router.
    route('/').
    post(validate(bookingSchema.createValidation), createBooking);
router.
    route('/:_id').
    delete(deleteBooking);

module.exports = router;