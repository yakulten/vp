var express = require('express');
var router = express.Router();

router.get(/.*/, function(req, res){
  var pathArr = req.path.replace(/^\//, "").split("/"),
    breadcrumbs = req.path.replace(/^\//, "").split("/");

  if(pathArr.length === 0 || req.path === "/"){
    pathArr = ["index"];
  } else if(pathArr.length === 1){
    pathArr.push("index");
  }

  if(/\d+/.test(pathArr[1])){
    pathArr[1] = "view";
    breadcrumbs[1] = "METAL SLUG DEFENCE"
  }

  res.render(pathArr.join("/"), { breadcrumbs: breadcrumbs });
});

module.exports = router;
