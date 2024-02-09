const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

userRouter.get('/:userID', userController.handlePassword);
userRouter.get('/:userID/orderStatus',userController.handleOrderStatus)

module.exports = userRouter;