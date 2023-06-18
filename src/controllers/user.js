const { StatusCodes } = require('http-status-codes');
const { insertUser, listUser, removeUser } = require('../services/user');

const createUser = (req, res) => {
    insertUser(req.body)
        .then(response => {
            res.status(StatusCodes.CREATED).send(response);
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });

}


const getUser = (req, res) => {

    const where = req.params?._id ? req.params : req.query;

    listUser(where)
        .then(response => {
            res.status(StatusCodes.OK).send(response);
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });

}

const deleteUser = (req, res) => {
    removeUser(req.params?._id)
        .then(response => {
            if (!response) {
                return res.status(StatusCodes.NOT_FOUND).send({
                    message: "Kayıt bulunamadı."
                });
            }

            res.status(StatusCodes.OK).send({
                message: "Kullanıcı silindi."
            });
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });
}

module.exports = {
    createUser,
    getUser,
    deleteUser
}