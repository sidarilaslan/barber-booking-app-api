const { StatusCodes } = require('http-status-codes');
const { insertService } = require('../services/service');

const create = (req, res) => {
    insertService(req.body)
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