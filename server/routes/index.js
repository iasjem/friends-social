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
        const postViewController = await PostController.feed();
        res.render('index.hbs', { userId: user.id, userViewController, postViewController });
    });

router.use('/user', require('./user'));
router.use('/posts', require('./post'));

module.exports = router;