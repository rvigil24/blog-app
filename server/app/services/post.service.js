const { Post } = require('../models')

const list = async (catName, username) => {
    try {
        let posts
        if (username) {
            posts = await Post.findAll({ username })
        } else if (catName) {
            posts = await Post.findAll({ categories: { $in: [catName] } })
        } else {
            posts = await Post.findAll()
        }
        return posts
    } catch (ex) {
        throw ex
    }
}

const get = async (postId) => {
    try {
        return await Post.findByPk(postId)
    } catch (ex) {
        throw ex
    }
}

const create = async (data) => {
    try {
        return await Post.create({ ...data })
    } catch (ex) {
        throw ex
    }
}

const update = async (postId, data) => {
    try {
        await Post.update(
            { ...data },
            {
                where: {
                    id: postId,
                },
            }
        )
        return await Post.findByPk(postId)
    } catch (ex) {
        throw ex
    }
}

const remove = async (postId) => {
    try {
        await Post.destroy({
            where: {
                id: postId,
            },
        })
    } catch (ex) {
        throw ex
    }
}

module.exports = {
    create,
    list,
    get,
    update,
    remove,
}
