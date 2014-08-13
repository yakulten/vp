!function(){
  angular.module("vp").factory("Analysis", ["$resource", function($resource){
    return $resource("/public/json/analysis.json");
  }]);
}();