const register = async (req, res) => {
    const { user } = req;
    return res.status(201).json({
        data: user,
    });
};

module.exports = {
    register,
};
