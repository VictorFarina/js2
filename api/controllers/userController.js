const router = require('express').Router();
const userModel = require('../models/users/userModel')

const auth = require("../auth/auth")

router.get('/:id', auth.verifyToken, userModel.getUser)
router.patch('/:id', userModel.addToOrders)

router.post('/register', userModel.registerUser);
router.post('/login', userModel.loginUser);
module.exports = router;