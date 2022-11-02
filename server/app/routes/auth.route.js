const express = require('express');
const { authController } = require('../controllers');
const { authGoogle } = require('../middlewares');

const authRouter = express.Router();

authRouter.post('/register', [authGoogle, authController.register]);

module.exports = { authRouter };
