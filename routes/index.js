var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('apps', { breadcrumbs: [ "APPS" ] });
});

router.get('/:page', function(req, res) {
  res.render(req.params.page, { breadcrumbs: [ page ] });
});


module.exports = router;
