const PostController = require('../controller/post.controller');
const CommentController = require('../controller/comment.controller');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const postViewController = await PostController.feed();
    const u = req.cookies;
    res.render('feed.hbs', { userId: u.userId, postViewController });
});

router.get('/:id', async (req, res) => {
    let postId = req.params.id;
    const postViewController = await PostController.postPreview(postId);
    const commentsViewController = await CommentController.postAllComments(postId);
    const u = req.cookies;
    res.render('post.hbs', { userId: u.userId, postViewController, commentsViewController })
});

module.exports = router;