/* eslint-disable no-unused-vars */
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Post }) {
            Category.hasMany(Post);
        }
    }
    Category.init(
        {
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Category',
            tableName: 'categories',
        }
    );
    return Category;
};
