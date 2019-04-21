const PostController = require('../controller/post.controller');
const CommentController = require('../controller/comment.controller');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const u = req.cookies;
        if (!u.userId) return res.redirect('/');    
        const postViewController = await PostController.feed();
        res.render('feed.hbs', { userId: u.userId, postViewController });        
    } catch (e) {
        res.send(e);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const u = req.cookies;
        if (!u.userId) return res.redirect('/');        
        let postId = req.params.id;
        const postViewController = await PostController.postPreview(postId);
        const commentsViewController = await CommentController.postAllComments(postId);
        res.render('post.hbs', { userId: u.userId, postViewController, commentsViewController });        
    } catch (e) {
        res.send(e);
    }
});

module.exports = router;