const path = require('path');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');

// storage para almacenar archivos de manera local
const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), 'uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

// storage para almacenar archivos en bucket S3
const s3Storage = multerS3({
    s3: new S3Client(),
    bucket: process.env.AWS_S3_BUCKET_NAME,
    metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
        cb(null, Date.now().toString());
    },
});

module.exports = {
    diskStorage,
    s3Storage,
};
