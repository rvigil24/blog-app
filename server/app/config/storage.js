const path = require('path');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');

// extensiones de archivos permitidos
const allowedPhotoTypes = ['image/png', 'image/jpeg', 'image/jpg'];

// storage para almacenar archivos de manera local
const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), 'uploads'));
    },
    filename: function (req, file, cb) {
        const fileName = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, fileName);
    },
});

// storage para almacenar archivos en bucket S3
const s3Storage = multerS3({
    s3: new S3Client(),
    bucket: process.env.AWS_S3_BUCKET_NAME,
    metadata: function (req, file, cb) {
        const fileName = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, { fieldName: fileName });
    },
    key: function (req, file, cb) {
        cb(null, Date.now().toString());
    },
});

module.exports = {
    diskStorage,
    s3Storage,
    allowedPhotoTypes,
};
