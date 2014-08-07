!function(){
  angular.module("vp").factory("Timezones", [ "$resource", function($resource){
    return $resource("/public/json/timezones");
  } ]);
}();