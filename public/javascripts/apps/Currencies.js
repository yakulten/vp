!function(){
  angular.module("vp").factory("Currencies", [ "$resource", function($resource){
    return $resource("/public/json/currencies.json");
  } ])
}();