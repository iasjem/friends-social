const { Err } = require('../model/Error');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index.hbs'));

router.use('/user', require('./user.js'));

module.exports = router;