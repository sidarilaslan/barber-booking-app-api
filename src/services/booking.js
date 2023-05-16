const Booking = require('../models/booking');

const insertBookings = (bookingData) => {
    const booking = new Booking(bookingData);
    return booking.save();
};

module.exports = {
    insertBookings
}