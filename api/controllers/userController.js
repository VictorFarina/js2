const router = require('express').Router();
const userModel = require('../models/users/userModel')
const auth = require("../auth/auth")

router.get('/:id', auth.verifyToken, userModel.getUser)

router.post('/register', userModel.registerUser);

router.post('/login', userModel.loginUser);

router.patch('/:id', userModel.addToOrders)


module.exports = router;