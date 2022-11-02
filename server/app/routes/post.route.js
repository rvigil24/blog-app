const express = require('express');
const { postController } = require('../controllers');
const postRouter = express.Router();

postRouter.get('/', postController.getPostsList);
postRouter.get('/:postId', postController.getPostById);
postRouter.post('/', postController.createPost);
postRouter.put('/:postId', postController.updatePost);
postRouter.delete('/:postId', postController.deletePost);

module.exports = { postRouter };
