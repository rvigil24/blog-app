require('dotenv').config()
const path = require('path')

module.exports = {
    development: {
        storage: `${path.resolve(process.cwd(), 'database.sqlite')}`,
        logging: true,
        dialect: 'sqlite',
        seederStorage: 'sequelize',
    },
    production: {
        username: 'root',
        password: null,
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'pg',
        seederStorage: 'sequelize',
    },
}
