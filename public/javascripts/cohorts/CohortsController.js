!function(){
  angular.module("vp").controller("CohortsController", [ "$scope", "$modal", function($scope, $modal){
    $scope.openCreateModal = function(){
      $modal.open({
        templateUrl: "/public/templates/cohorts/create.modal.html",
        size: "lg"
      });
    };
    $scope.openCreateModal();
  } ])
}();