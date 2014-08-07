!function(){
  var MenuController = function($scope, Apps){
    $scope.treedata = [
      {
        label: "ANALYTICS",
        href: "/analytics",
        icon: "signal",
        children: [
          { label: "OVERVIEW", isActive: true },
          { label: "REAL-TIME ACTIVITY" },
          { label: "MONETIZATION" },
          { label: "AUDIENCE", href: "/analytics/audience" },
          { label: "ACTIVITY" }
        ]
      }, {
        label: "MARKETING",
        href: "/campaigns",
        icon: "bullhorn",
        children: [
          { label: "IN APP MARKETING" },
          { label: "CROSS PROMOTION" },
          { label: "NETWORK PROMITION" }
        ]
      }
    ];
  };

  angular.module("vp").controller("MenuController", MenuController);
}();