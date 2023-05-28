const Booking = require('../models/booking');

const insertBooking = async (bookingData) => {

    const booking = new Booking(bookingData);
    return await booking.save();
};

const listBooking = async (where) => {

    const booking = await Booking.find(where || {});
    return booking;
};


module.exports = {
    insertBooking,
    listBooking
}