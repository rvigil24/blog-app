const multer = require('multer');
const { storage: multerStorage } = require('../config/');

const storage =
    process.env.NODE_ENV === 'development'
        ? multerStorage.diskStorage
        : multerStorage.s3Storage;

const upload = multer({ storage });

module.exports = {
    upload,
};
