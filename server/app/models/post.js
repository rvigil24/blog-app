/* eslint-disable no-unused-vars */
'use strict';
const { Model } = require('sequelize');
// const Category = require('./category')

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Category, User }) {
            // define association here
            // { Category: Category, Post: Post, User: User }
            Post.belongsTo(Category, {
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });

            Post.belongsTo(User, {
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });
        }
    }
    Post.init(
        {
            title: DataTypes.STRING,
            desc: DataTypes.TEXT,
            photo: DataTypes.STRING,
            userId: DataTypes.INTEGER,
            categoryId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Post',
        }
    );
    return Post;
};
