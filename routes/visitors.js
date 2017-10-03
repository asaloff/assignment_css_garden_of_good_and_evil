const express = require('express');
const router = express.Router();

const redis = require('redis');
const redisClient = redis.createClient();

router.get('/', (req, res) => {
  redisClient.incr('visitor-count', (err, count) => {
    res.send(`Visitor Count: ${ count }`);
  });
});

module.exports = router;
