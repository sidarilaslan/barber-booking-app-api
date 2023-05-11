const { StatusCodes } = require('http-status-codes');
const { insert } = require('../services/user');

const create = (req, res) => {
    insert(req.body)
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