const express = require('express');
const { authController } = require('../controllers');
const { authGoogle } = require('../middlewares');

const authRouter = express.Router();

authRouter.post('/register', [authGoogle, authController.register]);

// aqui agregaremos el mfa cuando el cliente este completado
// authRouter.post("/mfa", [])

module.exports = { authRouter };
