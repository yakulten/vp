!function(){

  var nowTime = new Date().getTime();
  var generateSeries = function(options){
    var series = {
        data: []
      };
    for(var i = 0, len = options.length; i < len; i++){
      series.data.push([ nowTime - (len - i) * 24 * 60 * 60 * 1000, _.random(0, 1000 * (i + 1)) ]);
    }
    return angular.extend(series, options);
  };

  var generateItems = function(){
    var items = [], item;
    for(var i = 0, len = 20; i < len; i++){
      item = {
        id: _.uniqueId("series"),
        name: "ACTIVITY_" + (len - i),
        count: _.random(100, 100000),
        uniqueCount: _.random(10, 10000),
        dtd: _.random(-100, 100),
        dtdp: _.random(-10, 10),
        wtw: _.random(-100, 100),
        wtwp: _.random(-10, 10),
        mtm: _.random(-100, 100),
        mtmp: _.random(-10, 10),
        isChecked: i < 5
      };
      items.push(item);
    }
    return items;
  };

  angular.module("vp").controller("ActivityController", [ "$scope", function($scope){
    $scope.items = generateItems();
    $scope.dateLength = 14;
    $scope.config = {
      options: {
        chart: {
          type: "column",
          height: 250
        }
      },
      xAxis: {
        type: "datetime"
      },
      yAxis: {
        min: 0
      },
      series: []
    };
    $scope.toggle = function(item){
      var series = _.findWhere($scope.config.series, { id: item.id });
      series.visible = series.showInLegend = item.isChecked;
    };
    $scope.$watch("dateLength", function(newVal, oldVal){
      $scope.config.series = [];
      angular.forEach($scope.items, function(item){
        var oldSeries = _.findWhere($scope.config.series, item.id),
          newSeries;

        newSeries = generateSeries({
          id: item.id,
          name: item.name,
          visible: item.isChecked,
          showInLegend: item.isChecked,
          length: $scope.dateLength
        });

        $scope.config.series.push(newSeries);
      });
    });
  }]);
}();