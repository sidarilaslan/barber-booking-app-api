const { StatusCodes } = require('http-status-codes');
const { insertWorker } = require('../services/worker');

const create = (req, res) => {
    insertWorker(req.body)
        .then(response => {
            res.status(StatusCodes.CREATED).send(response);
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });
}

module.exports = {
    create
}