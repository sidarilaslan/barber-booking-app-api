const { StatusCodes } = require('http-status-codes');
const { insertWorker, listWorker, removeWorker } = require('../services/worker');

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
            res.status(StatusCodes.OK).send(response);
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });
}

const deleteWorker = (req, res) => {
    removeWorker(req.params?._id)
        .then(response => {
            if (!response) {
                return res.status(StatusCodes.NOT_FOUND).send({
                    message: "Kayıt bulunamadı."
                });
            }

            res.status(StatusCodes.OK).send({
                message: "Kişi silindi."
            });
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });
}


module.exports = {
    createWorker,
    getWorker,
    deleteWorker
}