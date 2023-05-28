const { StatusCodes } = require('http-status-codes');
const { insertUser, listUser } = require('../services/user');

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

    const where = req.params._id ? req.params : req.query;

    listUser(where)
        .then(response => {
            res.status(StatusCodes.CREATED).send(response);
        })
        .catch(e => {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
        });

}

module.exports = {
    createUser,
    getUser,
}