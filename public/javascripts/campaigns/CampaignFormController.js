!function(){
  angular.module("vp").controller("CampaignFormController", [ "$scope", "Apps", function($scope, Apps){
    $scope.campaigntypes = [ {
      name: "IN APP MARKETING"
    }, {
      name: "CROSS PROMOTION"
    }, {
      name: "NETWORK PROMOTION"
    }, {
      name: "DIRECT DEAL"
    } ];
    $scope.campaigntype = $scope.campaigntypes[0];


    $scope.campaignsubtypes = [ {
      name: "ANNOUNCE"
    }, {
      name: "REWARD"
    }, {
      name: "IN APP PURCHASE"
    }, {
      name: "PUSH NOTIFICATION"
    } ];
    $scope.campaignsubtype = $scope.campaignsubtypes[0];

    $scope.start_date = new Date();
    $scope.end_date = null;

    $scope.orientation = "landscape";

    $scope.openCalendar = function($event){
      $event.preventDefault();
      $event.stopPropagation();
      $scope.startDatePickerOpened = $scope.endDatePickerOpened = true;
    }

    Apps.query(function(items){
      $scope.apps = items;
    });
  } ]);
}();