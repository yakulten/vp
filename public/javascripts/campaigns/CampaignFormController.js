!function(){
  angular.module("vp").controller("CampaignFormController", [ "$scope", "$modal", "Apps", function($scope, $modal, Apps){
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

    $scope.contents = [ {
      img_url: "http://media-cache-ak0.pinimg.com/236x/b1/5e/fe/b15efe41bc712ad5bd4d39aa163613ac.jpg",
      name: "CONTENT 1",
      orientation: "landscape",
      weight: 100
    }, {
      img_url: "http://media-cache-ec0.pinimg.com/236x/c8/2d/05/c82d058b0f6248b7def8fa60a33ce6cb.jpg",
      name: "CONTENT 2",
      orientation: "landscape",
      weight: 50
    } ];

    $scope.contentSeries = {
      type: "pie",
      name: "WEIGHTS",
      data: []
    };

    $scope.contentChartConfig = {
      options: {
        chart: {
          marginTop: 0,
          marginBottom: 0,
          // spacing: [ 0, 0, 0, 0],
          height: 119
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          pie: {
            innerSize: 54,
            size: 60,
            showInLegend: false,
            dataLabels: {
              distance: 10,
              format: "{point.name}<br>{point.y} / {point.total}"
            }
          }
        }
      },
      series: [ $scope.contentSeries ]
    };

    $scope.placements = [ {
      name: "placement 1",
      description: "placement description 1"
    }, {
      name: "placement 2",
      description: "placement description 2"
    }, {
      name: "placement 3",
      description: "placement description 3"
    }, {
      name: "placement 4",
      description: "placement description 4"
    }, {
      name: "placement 5",
      description: "placement description 5"
    } ]

    $scope.openCalendar = function($event){
      $event.preventDefault();
      $event.stopPropagation();
      $scope.startDatePickerOpened = $scope.endDatePickerOpened = true;
    };

    $scope.openContentModal = function(content){
      var modalScope = $scope.$new(),
        contentClone = angular.copy(content);

      modalScope.content = contentClone;

      return $modal.open({
        templateUrl: "/public/templates/campaigns/thumbnail.modal.html",
        scope: modalScope
      })
      .result
      .then(function(modifiedContent){
        angular.extend(content, modifiedContent);
      }, function(){
        console.log("dismiss");
      });
    };

    $scope.removeContent = function(content){
      $scope.contents.splice($scope.contents.indexOf(content), 1);
    };

    $scope.addContent = function(){
      var newContent = {
        img_url: "",
        name: "",
        orientation: "landscape",
        weight: null
      };
      $scope.contents.push(newContent);
      $scope.openContentModal(newContent);
    };

    $scope.$watch("contents", function(oldVal, newVal){
      $scope.contentSeries.data = _.map($scope.contents, function(content){
        return [ content.name, parseFloat(content.weight || 0, 10) ];
      });
    }, true);



    Apps.query(function(items){
      $scope.apps = items;
      $scope.app = $scope.apps[7];
    });
  } ]);
}();