!function(){
  angular.module("vp").factory("Apps", function($resource){
    return $resource("/public/json/apps.json");
  });
}();