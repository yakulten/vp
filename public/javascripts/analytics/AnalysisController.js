//= require analytics/Analysis
//= require filters/duration
!function(){
  var nowTime = new Date().getTime();
  var generateSeries = function(options) {
    var series = {
      data: []
    };
    for(var i = 0, len = 30; i < len; i++){
      series.data.push([ nowTime - ( len - i ) * 24 * 60 * 60 * 1000, _.random(0, i * 5000) ]);
    }
    return angular.extend(series, options);
  };
  angular.module("vp").controller("AnalysisController", [ "$scope", "Analysis", "ngTableParams", function($scope, Analysis, ngTableParams){
    Analysis.query(function(response){
      $scope.items = response;
      $scope.tableParams = new ngTableParams({
        page: 1,
        count: $scope.items.length
      }, {
        counts: [],
        total: $scope.items.length,
        getData: function($defer, params){
          $defer.resolve($scope.items);
        }
      });
      angular.forEach($scope.items, function(item){
        $scope.config.series.push(generateSeries({
          name: item.name
        }));
      })
    });
    $scope.config = {
      chart: {},
      xAxis: {
        type: "datetime"
      },
      series: [
      ]
    };
  } ]);

}();