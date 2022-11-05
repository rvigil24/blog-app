const register = async (req, res) => {
    const { user } = req;
    return res.status(201).json({
        data: user,
    });
};

// aqui crearemos login con email y password
const login = async (req, res) => {};

// aqui colocaremos nuestra creacion del mfa
const createMfa = async (req, res) => {
    // retornar el QR Code generado por HTML para el cliente
};

module.exports = {
    register,
};
