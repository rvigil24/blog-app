'use strict'

/** @type {import('sequelize-cli').Migration} */
const categorias = [
    {
        name: 'Tecnología',
    },
    {
        name: 'Economía',
    },
    {
        name: 'Política',
    },
    {
        name: 'Deporte',
    },
    {
        name: 'Cultura',
    },
    {
        name: 'Entretenimiento',
    },
    {
        name: 'Noticias',
    },
    {
        name: 'Otros',
    },
]
module.exports = {
    async up(queryInterface) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('categories', categorias, {})
    },

    async down(queryInterface) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('categories', {
            [Op.or]: categorias,
        })
    },
}
