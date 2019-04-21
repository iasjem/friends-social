const PostController = require('../controller/post.controller');
const CommentController = require('../controller/comment.controller');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const postViewController = await PostController.feed();
    res.render('feed.hbs', { postViewController });
});

router.get('/:id', async (req, res) => {
    let postId = req.params.id;
    const postViewController = await PostController.postPreview(postId);
    const commentsViewController = await CommentController.postAllComments(postId);
    res.render('post.hbs', { postViewController, commentsViewController })
});

module.exports = router;