const api = require('../api/users');
const UserController = require('../controller/user.controller');
const PostController = require('../controller/post.controller');
const express = require('express');
const router = express.Router();

router.route('/') 
    .get((req, res) => {
        if (!req.cookies['userId']) return res.render('login.hbs');
        return res.redirect('/home');
    })
    .post(async (req, res) => {
        const user = await api.findUserByEmail(req.body.email);
        if (!user) return res.redirect('/');
        res.cookie('userId', user.id).redirect('/home');
    });

router.get('/home', async (req, res) => {
    try {
        const u = req.cookies;
        if (!u.userId) return res.redirect('/');    
        const userViewController = await UserController.login(u.userId);
        const postViewController = await PostController.feed();
        res.render('index.hbs', { userId: u.userId, userViewController, postViewController });
    } catch (e) {
        res.send(e);
    }
});

router.get('/me', async (req, res) => {
    try {
        const u = req.cookies;
        if (!u.userId) return res.redirect('/');    
        const userId = u.userId;
        const userViewController = await UserController.profile(userId);
        const postViewController = await PostController.userFeed(userId);
        res.render('user.hbs', { userId,  userViewController, postViewController });
    } catch (e) {
        res.send(e);
    }
});

router.use('/user', require('./user'));
router.use('/posts', require('./post'));

module.exports = router;