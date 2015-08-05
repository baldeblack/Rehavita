app.controller("mainCtrl", function($scope, uiGmapGoogleMapApi) {

    $scope.map = { center: { latitude: -34.902250, longitude: -56.175044 }, zoom: 18 };
    $scope.marker = {
      id: 0,
      coords: {
        latitude: -34.902250,
        longitude:  -56.175044
      },
      icon: 'img/pin2.png',
      options: {
        animation: 1,
        draggable: true
      }
    };
});

