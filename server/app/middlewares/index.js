const authGoogle = require('./authGoogle.middleware');
const authenticateToken = require('./authenticateToken.middleware');

module.exports = {
    authGoogle,
    authenticateToken,
};
