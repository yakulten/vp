! function() {
  var LocationsController = function($scope, ngTableParams) {
    var locations = [{
      name: "Singapore",
      id: 1,
      latitude: 1,
      longitude: 103,
      icon: '/public/images/pin.png'
    }, {
      name: "Japan",
      id: 2,
      latitude: 37,
      longitude: 138,
      icon: '/public/images/pin.png'
    }, {
      name: "China",
      id: 3,
      latitude: 35,
      longitude: 104,
      icon: '/public/images/pin.png'
    }, {
      name: "South Korea",
      id: 4,
      latitude: 35,
      longitude: 127,
      icon: '/public/images/pin.png'
    }];

    var latLngBounds = new google.maps.LatLngBounds();
    angular.forEach(locations, function(location){
      latLngBounds.extend(new google.maps.LatLng(location.latitude, location.longitude));
    });

    $scope.map = {
      center: {
        latitude: latLngBounds.getCenter().lat(),
        longitude: latLngBounds.getCenter().lng()
      },
      zoom: 2,
      options: {
        disableDefaultUI: true,
        mapTypeControl: false,
        panControl: false,
        streetViewControl: false,
        zoomControl: true,
        overviewMapControl: false,
        styles: [{
          "featureType": "water",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "administrative.province",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "landscape",
          "stylers": [{
            "color": "#dddddd"
          }]
        }, {
          "featureType": "administrative.country",
          "stylers": [{
            "visibility": "off"
          }]
        }]
      },
      markers: locations
    };

    $scope.items = [];
    angular.forEach(locations, function(location) {
      $scope.items.push({
        location: location,
        dau: _.random(1000, 10000),
        revenue: _.random(1000000, 10000000),
        installs: _.random(1000, 10000),
        avgSessionLength: new Date(new Date().getTime() + _.random(10) * 1000 * 60),
        sessionPerUser: _.random(100, 1000)
      });
    });

    $scope.tableParams = new ngTableParams({
      page: 1,
      count: 10
    }, {
      counts: [],
      total: 1,
      getData: function($defer, params) {
        // params.total($scope.items);
        $defer.resolve($scope.items);
      }
    });

  };
  angular.module("vp").controller("LocationsController", LocationsController);
}();