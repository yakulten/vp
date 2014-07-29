!function(){
  var ChartsController = function($scope, $http, $attrs) {
    $scope.config = angular.fromJson($attrs.config);
    $http.get($attrs.url).success(function(response){
      $scope.config.xAxis = {
        categories: _.map(response.x_categories, function(str){
          return moment(str, "YYYYMMDD").format("YYYY.MM.DD");
        }),
        type: "datetime"
      };
      $scope.config = $.extend(true, $scope.config, response);
    });
  };

  angular.module("valuepotion").controller("ChartsController", ChartsController);
}();