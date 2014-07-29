var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/:page', function(req, res) {
  res.render(req.params.page);
});


module.exports = router;
