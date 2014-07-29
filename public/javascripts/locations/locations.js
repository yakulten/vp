!function(){
  var LocationsController = function($scope, ngTableParams){
    var locations = [{
        name: "Singapore",
        x: 75,
        y: 59
      }, {
        name: "Japan",
        x: 85,
        y: 40
      }, {
        name: "China",
        x: 78,
        y: 42
      }, {
        name: "South Korea",
        x: 82,
        y: 40
      }];

    $scope.items = [];
    angular.forEach(locations, function(location){
      $scope.items.push({
        location: location,
        dau: _.random(1000, 10000),
        revenue: _.random(1000000, 10000000),
        installs: _.random(1000, 10000),
        avgSessionLength: new Date(new Date().getTime() + _.random(10) * 1000 * 60),
        sessionPerUser: _.random(100, 1000)
      });
    });

    $scope.tableParams = new ngTableParams({
      page: 1,
      count: 10
    }, {
      counts: [],
      total: 1,
      getData: function($defer, params){
        // params.total($scope.items);
        $defer.resolve($scope.items);
      }
    });

  };
  angular.module("valuepotion").controller("LocationsController", LocationsController);
}();