const Booking = require('../models/booking');

const insertBooking = async (bookingData) => {

    const booking = new Booking(bookingData);
    return await booking.save();
};

const listBooking = async (where) => {

    const booking = await Booking.find(where || {}).populate({
        path: "worker_id",
        populate: {
            path: "user_id",
            select: "_id name lastName phoneNumber"
        }
    }).populate({
        path: "user_id",
        select: "_id name lastName phoneNumber"
    });
    return booking;
};
const removeBooking = async (id) => {
    return await Booking.findByIdAndDelete(id);
}


module.exports = {
    insertBooking,
    listBooking,
    removeBooking
}