!function(){
  angular.module("vp").factory("Genres", [ "$resource", function($resource){
    return $resource("/public/json/genres.json");
  } ])
}();