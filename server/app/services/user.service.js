const jwt = require('jsonwebtoken');
const { User } = require('../models');

const list = async () => {
    try {
        return await User.findAll();
    } catch (ex) {
        throw ex;
    }
};

const getById = async (id) => {
    try {
        return await User.findOne({ id });
    } catch (ex) {
        throw ex;
    }
};

const getByEmail = async (email) => {
    try {
        return await User.findOne({ email });
    } catch (ex) {
        throw ex;
    }
};

const create = async (data) => {
    try {
        const user = await User.create({ ...data });
        return user;
    } catch (ex) {
        throw ex;
    }
};

const toAuthJson = (user) => {
    const token = jwt.sign(
        {
            ...user,
        },
        process.env.JWT_SECRET
    );
    return {
        ...user,
        token,
    };
};

module.exports = {
    list,
    create,
    getByEmail,
    getById,
    toAuthJson,
};
