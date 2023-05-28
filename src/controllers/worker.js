const { StatusCodes } = require('http-status-codes');
const { insertWorker, listWorker } = require('../services/worker');

const createWorker = (req, res) => {
    insertWorker(req.body)
        .then(response => {
            res.status(StatusCodes.CREATED).send(response);
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });
}

const getWorker = (req, res) => {
    const where = req.params._id ? req.params : req.query;

    listWorker(where)
        .then(response => {
            res.status(StatusCodes.CREATED).send(response);
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });
}


module.exports = {
    createWorker,
    getWorker
}