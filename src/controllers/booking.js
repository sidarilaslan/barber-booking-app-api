const { StatusCodes } = require('http-status-codes');
const { insertBooking, listBooking, removeBooking } = require('../services/booking');

const createBooking = (req, res) => {
    insertBooking(req.body)
        .then(response => {
            res.status(StatusCodes.CREATED).send(response);
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });

}

const getBooking = (req, res) => {

    const where = req.params._id ? req.params : req.query;

    listBooking(where)
        .then(response => {
            res.status(StatusCodes.OK).send(response);
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });
}

const deleteBooking = (req, res) => {
    removeBooking(req.params?._id)
        .then(response => {
            if (!response) {
                return res.status(StatusCodes.NOT_FOUND).send({
                    message: "Randevu bulunamadı."
                });
            }

            res.status(StatusCodes.OK).send({
                message: "Randevu silindi."
            });
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });
}


module.exports = {
    createBooking,
    getBooking,
    deleteBooking
}