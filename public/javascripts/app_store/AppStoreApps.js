!function(){
  angular.module("vp").factory("AppStoreApps", [ "$resource", function($resource){
    return $resource("/public/json/app_store_apps.json");
  } ]);
}();