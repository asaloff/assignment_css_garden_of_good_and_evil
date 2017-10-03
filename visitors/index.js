const app = require('express')();
const redis = require('redis');
const redisClient = redis.creatClient();

app.get('/count', (req, res) => {
  redis.incr('visitor-count', (err, count) => {
    res.send(`Visitor Count: ${ count }`);
  });
});

app.listen(3000);
