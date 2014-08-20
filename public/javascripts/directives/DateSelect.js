!function(){
  angular.module("vp").directive("dateSelect", function(){
    var now = new Date(),
      rangeOption = {
        value: { start: now, end: now },
        label: "CHOOSE RANGE"
      },
      options = [{
        value: 1,
        label: "RECENT 1DAY"
      }, {
        value: 3,
        label: "RECENT 3DAY"
      }, {
        value: 7,
        label: "RECENT 1WEEK"
      }, {
        value: 30,
        label: "RECENT 1MONTH"
      },
      rangeOption
    ];

    return {
      restrict: "A",
      scope: {
        date: "=dateSelect"
      },
      templateUrl: "/public/templates/directives/date_select.html",
      link: function(scope, element) { },
      controller: function($scope, $element){
        $scope.rangeOption = rangeOption;
        $scope.options = options;
        $scope.isDateRangeShown = $scope.startDatePickerOpened = $scope.endDatePickerOpened = false;

        $scope.open = function($event){
          if(angular.isDefined($event)){
            $event.preventDefault();
            $event.stopPropagation();
          }
          $scope.isDateRangeShown = $scope.startDatePickerOpened = $scope.endDatePickerOpened = true;
        };
        $scope.close = function($event){
          var label = moment($scope.rangeOption.value.start).format("YYYY-MM-DD") + " ~ " + moment($scope.rangeOption.value.end).format("YYYY-MM-DD"),
            option = _.findWhere($scope.options, { label: label }) || angular.copy($scope.rangeOption);


          if(option.label !== label){
            option.label = label;
            options.push(option);
          }

          $scope.date = option;
          $scope.isDateRangeShown = $scope.startDatePickerOpened = $scope.endDatePickerOpened = false;

          $event.preventDefault();
          $event.stopPropagation();
        }
        $scope.$watch("date", function(newVal){
          if(angular.equals(newVal, $scope.rangeOption)){
            $scope.open();
          }
        });
      }
    }
  });
}();