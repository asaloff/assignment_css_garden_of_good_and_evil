const express = require('express');
const router = express.Router();
const { saveCookies } = require('../services/cookie_store');

/* GET home page. */
router.get('/', (req, res) => {
  let { personaName, favColor, favFood, goal, insanityLevel } = req.cookies;
  res.render('index', { personaName, favColor, favFood, goal, insanityLevel });
});

router.post('/', (req, res) => {
  saveCookies(req, res);
  res.redirect('/');
});

module.exports = router;
