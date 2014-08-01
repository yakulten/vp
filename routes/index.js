var express = require('express');
var router = express.Router();

var sectionHandler = function(req, res){
  var renderPath;

  res.locals.path.unshift(req.params.section);

  if(res.locals.path.length === 1){
    res.locals.path.push("list");
  }

  res.locals.breadcrumbs.push(req.params.section);
  res.render(res.locals.path.join("/"));
};

var viewHandler = function(req, res){
  res.locals.breadcrumbs.push("METAL SLUG DEFENSE");
  if(res.locals.path.length === 0){
    res.locals.path.push("view");
  }
  sectionHandler(req, res);
};

var pageHandler = function(req, res){
  res.locals.breadcrumbs.push(req.params.page);
  res.locals.path.push(req.params.page);
  viewHandler(req, res);
};

/* GET home page. */
router.get('/', function(req, res) {
  res.render('apps', { breadcrumbs: [ "APPS" ] });
});

router.get('/:section', sectionHandler);

router.get('/:section/:id', viewHandler);

router.get('/:section/:id/:page', pageHandler);

module.exports = router;
