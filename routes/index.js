const express = require('express');
const router = express.Router();
const { saveCookies } = require('../services/cookie_store');

/* GET home page. */
router.get('/', (req, res) => {
  let cookies = req.cookies;
  res.render('index', { cookies });
});

router.post('/', (req, res) => {
  saveCookies(req, res);
  res.redirect('/');
});

module.exports = router;
