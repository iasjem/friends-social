const UserController = require('../controller/user.controller');
const PostController = require('../controller/post.controller');
const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res) => {
    let userId = req.params.id;
    const userViewController = await UserController.profile(userId);
    const postViewController = await PostController.userFeed(userId);
    res.render('user.hbs', { userId,  userViewController, postViewController });
});

router.post('/logout', (req, res) => {
    res.clearCookie('userId').redirect('/');
});

module.exports = router;