//= require app_store/AppStoreApps
//= require apps/Timezones
//= require apps/Currencies
//= require apps/Genres
!function(){
  angular.module("vp").controller("AppFormController", [ "$scope", "$modal", "AppStoreApps", "Timezones", "Currencies", "Genres", function($scope, $modal, AppStoreApps, Timezones, Currencies, Genres){

    AppStoreApps.query(function(apps){
      $scope.apps = apps;
    });

    Timezones.query(function(timezones){
      $scope.timezoneGroup = _.groupBy(timezones, "offset");
    });

    Currencies.query(function(currencies){
      $scope.currencies = currencies;
    });

    Genres.query(function(genres){
      $scope.genres = genres;
    });

    $scope.openBgModal = function(){
      $scope.bg = "/public/images/background.jpg";
      $modal.open({
        templateUrl: "/public/templates/apps/bg.modal.html",
        scope: $scope
      });
    };

  } ]);
}();