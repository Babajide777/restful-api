var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('person route');
});

router.get('/:name', function(req, res) {
  
  res.send(`You have reach the person route. It was opened by ${req.params.name}`);
   
});

module.exports = router;