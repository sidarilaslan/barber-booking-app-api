const { StatusCodes } = require('http-status-codes');
const { insertService, listService } = require('../services/service');

const createService = (req, res) => {
    insertService(req.body)
        .then(response => {
            res.status(StatusCodes.CREATED).send(response);
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });

}

const getService = (req, res) => {

    const where = req.params._id ? req.params : req.query;

    listService(where)
        .then(response => {
            res.status(StatusCodes.CREATED).send(response);
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });

}


module.exports = {
    createService,
    getService
}