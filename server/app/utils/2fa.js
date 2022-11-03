const speakeasy = require('speakeasy');
const QRCode = require('qrcode');

const getTwoFactorAuthenticationCode = () => {
    console.log(
        'process.env.TWO_FACTOR_AUTHENTICATION_APP_NAME,',
        process.env.TWO_FACTOR_AUTHENTICATION_APP_NAME
    );

    const secretCode = speakeasy.generateSecret({
        name: process.env.MFA_AUTHENTICATION_APP_NAME,
    });
    return {
        otpauthUrl: secretCode.otpauth_url,
        base32: secretCode.base32,
    };
};

const respondWithQRCode = (data, response) => {
    QRCode.toFileStream(response, data);
};

module.exports = {
    getTwoFactorAuthenticationCode,
    respondWithQRCode,
};
