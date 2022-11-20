const express = require('express');
const { authController } = require('../controllers');

const authRouter = express.Router();

authRouter.post('/register', authController.register);

// aqui agregaremos el mfa cuando el cliente este completado
// authRouter.post("/mfa", [])

module.exports = { authRouter };
