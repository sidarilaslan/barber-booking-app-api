const { StatusCodes } = require('http-status-codes');
const { insertUser } = require('../services/user');

const create = (req, res) => {
    insertUser(req.body)
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