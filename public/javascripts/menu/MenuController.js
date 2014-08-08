!function(){
  var MenuController = function($scope, Apps){
    $scope.tree = [
      {
        label: "APPS",
        href: "/apps",
        children: [
          {
            label: {
              isObject: true,
              thumb: "//lh4.ggpht.com/3WooaXkS8KBUFfHnleHW_fCoWTyaY04a-G9U35hvTpxN6_O4djvwhTIwVeSAuy7J5HA=w170-rw",
              name: "METAL SLUG DEFENCE",
              company: "SNK PLAY MORE",
              genre: "STRATEGY",
              description: "“METAL SLUG DEFENSE” breaks a new record again"
            },
            href: "/apps/1" ,
            children: [
              { label: "LOCATIONS", href: "/apps/1/locations" },
              { label: "CUSTOM EVENTS", href: "/apps/1/events" },
              { label: "GAME VERSIONS", href: "/apps/1/versions" },
              { label: "REWARD ITEMS", href: "/apps/1/rewards" },
              { label: "IAP ITEMS", href: "/apps/1/iap" },
              { label: "COHORTS", href: "/apps/1/cohorts" }
            ]
          },
          {
            label: "ANALYTICS",
            href: "/apps/1/analytics",
            children: [
              { label: "REAL-TIME ACTIVITY", href: "/apps/1/analytics/realtime_activity" },
              { label: "MONETIZATION", href: "/apps/1/analytics/monetization" },
              { label: "AUDIENCE", href: "/apps/1/analytics/audience" },
              { label: "ACTIVITY", href: "/apps/1/analytics/activity" }
            ]
          }
        ]
      },
      {
        label: "ANALYTICS",
        href: "/analytics",
        children: [
          { label: "IN APP MARKETING" },
          { label: "CROSS PROMOTION" },
          { label: "NETWORK PROMITION" }
        ]
      }, {
        label: "MARKETING",
        href: "/campaigns",
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