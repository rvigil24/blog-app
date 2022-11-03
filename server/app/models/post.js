/* eslint-disable no-unused-vars */
'use strict';
const { Model } = require('sequelize');
const { mailer } = require('../utils');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Category, User }) {
            // define association here
            Post.belongsTo(Category, {
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            });

            Post.belongsTo(User, {
                as: 'user',
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
            hooks: {
                afterCreate: async (post, options) => {
                    const user = await sequelize.models.User.findByPk(
                        post.userId
                    );
                    const to = user.email;
                    const subject = 'Post creado exitosamente';
                    const data = `El post ${post.title} fue creado exitosamente`;
                    await mailer.sendMail({ to, subject, data });
                },
            },
            sequelize,
            modelName: 'Post',
            tableName: 'posts'
        }
    );
    return Post;
};
