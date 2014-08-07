! function() {
  angular.module("vp").factory("Campaigns", function($resource) {
    return $resource("/public/json/campaigns.json");
  });
  angular.module("vp").controller("CampaignsController", function($scope, Campaigns) {
    $scope.uiConfig = {
      calendar: {
        height: 450,
        editable: true,
        header: {
          left: 'title',
          // center: ' title ',
          right: 'month,basicWeek,basicDay   prev,today,next'
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        viewRender: function(view, element) {
          $(".fc-button").addClass("btn btn-default");
        }
      }
    };

    $scope.eventSources = [];

    Campaigns.query(function(items) {
      var c = 0,
        eventSources = _.chain(items)
        .groupBy(function(item, i) {
          return item.campaigntype_id;
        })
        .each(function(item, i) {
          $scope.eventSources.push({
            color: Highcharts.getOptions().colors[c++],
            events: item
          });
        })
        .value();

      $scope.calendar.fullCalendar("gotoDate", moment(_.last(items).start).toDate());

      $scope.items = items;
    });
  });
}();