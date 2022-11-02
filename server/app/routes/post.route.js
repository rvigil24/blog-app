const express = require('express');
const { postController } = require('../controllers');
const { authenticateToken, uploadFile } = require('../middlewares');
const postRouter = express.Router();

// leer posts
postRouter.get('/', postController.getPostsList);

// leer posts por id
postRouter.get('/:postId', postController.getPostById);

// crear post
postRouter.post(
    '/',
    authenticateToken,
    uploadFile.upload.single('photo'),
    postController.createPost
);

// actualizar post
postRouter.put('/:postId', authenticateToken, postController.updatePost);

// eliminar post
postRouter.delete('/:postId', authenticateToken, postController.deletePost);

module.exports = { postRouter };
