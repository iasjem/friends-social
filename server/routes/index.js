const api = require('../api/users');
const UserController = require('../controller/user.controller');
const PostController = require('../controller/post.controller');
const express = require('express');
const router = express.Router();

router.route('/') 
    .get((req, res) => res.render('login.hbs'))
    .post(async (req, res) => {
        const userViewController = await UserController.login(req.body.email);
        const user = await api.findUserByEmail(req.body.email);
        const postViewController = await PostController.userFeed(user.id);
        res.render('index.hbs', { userViewController, postViewController });
    });

router.use('/user', require('./user.js'));

router.use('/posts', require('./post.js'));

module.exports = router;