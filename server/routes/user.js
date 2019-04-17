const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('index.hbs');
});
router.get('/logout', (req, res) => res.render('login.hbs'));

module.exports = router;