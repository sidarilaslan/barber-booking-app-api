const { StatusCodes } = require('http-status-codes');
const { insertService, listService, removeService } = require('../services/service');

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
            res.status(StatusCodes.OK).send(response);
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });
}


const deleteService = (req, res) => {
    removeService(req.params?._id)
        .then(response => {
            if (!response) {
                return res.status(StatusCodes.NOT_FOUND).send({
                    message: "Servis bulunamadı."
                });
            }

            res.status(StatusCodes.OK).send({
                message: "Servis silindi."
            });
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });
}



module.exports = {
    createService,
    getService,
    deleteService
}