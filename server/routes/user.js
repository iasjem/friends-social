const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => res.redirect('index.hbs'));
router.get('/logout', (req, res) => res.redirect('login.hbs'));

module.exports = router;