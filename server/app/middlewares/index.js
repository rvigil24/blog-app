const authGoogle = require('./authGoogle.middleware');
const authenticateToken = require('./authenticateToken.middleware');
const uploadFile = require('./uploadFile.middleware')

module.exports = {
    authGoogle,
    authenticateToken,
    uploadFile
};
