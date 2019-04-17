const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index.hbs'));
router.get('*', (req, res) => res.render('404.hbs'));

router.use('/user', require('./user.js'));

module.exports = router;