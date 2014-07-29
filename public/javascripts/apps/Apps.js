!function(){
  angular.module("valuepotion").factory("Apps", function($resource){
    return $resource("/public/json/apps.json");
  });

  angular.module("valuepotion").controller("AppsController", function($scope, $filter, Apps, ngTableParams){
    Apps.query(function(response){
      $scope.tableParams = new ngTableParams({
        page:1,
        count: 15
      }, {
        counts: [],
        total: response.length,
        getData: function($defer, params){
          var items = $filter("filter")(response, params.filter());
          items = $filter("orderBy")(items, params.orderBy());
          $defer.resolve(items);
        }
      });
    });
  });
}();