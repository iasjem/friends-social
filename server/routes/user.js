const { Err } = require('../model/Error');
const UserController = require('../controller/user.controller');
const express = require('express');
const router = express.Router();

router.route('/login')
    .get((req, res) => res.render('login.hbs'))
    .post(async (req, res) => {
        const result = await UserController.login(api.findUserById(req.params.email));
        if (!result) return res.status(400).render('error.hbs', { Error: Err.userNotFound });
        res.render('index.hbs', { User: result });
    });

router.post('/logout', (req, res) => res.redirect('/user/login'));

module.exports = router;