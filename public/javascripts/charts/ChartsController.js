!function(){
  var ChartsController = function($scope, $http, $attrs) {
    $scope.config = angular.fromJson($attrs.config);
    if(angular.isDefined($attrs.url)){
      $http.get($attrs.url).success(function(response){
        $scope.config = $.extend(true, $scope.config, response);
      });
    }
  };

  angular.module("valuepotion").controller("ChartsController", ChartsController);
}();