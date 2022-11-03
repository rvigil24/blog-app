const multer = require('multer');
const { storage: multerStorage } = require('../config/');
const { allowedPhotoTypes, diskStorage, s3Storage } = multerStorage;
const isDevEnvironment = process.env.NODE_ENV === 'development';

const fileFilter = (req, file, cb) => {
    const validExtension = allowedPhotoTypes.includes(file.mimetype);
    if (!validExtension) {
        return cb(new Error('Solo se permiten archivos  .png, y .jpeg'), false);
    }
    return cb(null, true);
};
const storage = isDevEnvironment ? diskStorage : s3Storage;
const upload = multer({
    storage,
    fileFilter,
});

module.exports = {
    upload,
};
