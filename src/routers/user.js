const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate');
const userSchemas = require('../validations/user');
const { createUser, getUser } = require('../controllers/user');


router.
    route('/').
    get(getUser);
router.
    route('/:_id').
    get(getUser);
router.
    route('/').
    post(validate(userSchemas.createValidation), createUser);




module.exports = router;