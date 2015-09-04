var express = require('express');
var router = express.Router();

/* these are the endpoints for the life simulator */
// get / get's current state
// put / sets/updates the current board
// delete / resets the current board
// post /next iterate n steps
// get /delta get changes from last /next call
var a = 0
router.get('/', function(req, res, next) {
  a = a +1 ;
  res.send(String(a));
});

router.put('/', function(req, res, next) {
  res.send('put /');
});

router.delete('/', function(req, res, next) {
  res.send('delete /');
});

router.post('/next', function(req, res, next) {
  res.send('post /next');
});

router.get('/delta', function(req, res, next) {
  res.send('get /delta');
});

module.exports = router;
