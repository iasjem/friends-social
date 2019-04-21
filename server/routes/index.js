const api = require('../api/users');
const UserController = require('../controller/user.controller');
const PostController = require('../controller/post.controller');
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();

router.route('/') 
    .get((req, res) => {
        if (!req.cookies['userId']) return res.render('login.hbs');
        return res.redirect('/home');
    })
    .post(async (req, res) => {
        const user = await api.findUserByEmail(req.body.email);
        if (!user) res.redirect('/');
        res.cookie('userId', user.id).redirect('/home');
    });

router.get('/home', async (req, res) => {
    const u = req.cookies;
    const userViewController = await UserController.login(u.userId);
    const postViewController = await PostController.feed();
    res.render('index.hbs', { userId: u.userId, userViewController, postViewController });
});

router.use('/user', require('./user'));
router.use('/posts', require('./post'));

module.exports = router;