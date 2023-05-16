const { StatusCodes } = require('http-status-codes');
const { insertBookings } = require('../services/booking');

const create = (req, res) => {
    insertBookings(req.body)
        .then(response => {
            res.status(StatusCodes.CREATED).send(response);
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });

}

module.exports = {
    create,
}