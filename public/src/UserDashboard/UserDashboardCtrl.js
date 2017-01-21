'use strict';

droneCafeApp.controller('UserDashboardCtrl', function($scope, UserDashboardService) {

  $scope.userLoggedIn = false;

  $scope.openLoginPopup = function(){
    $('#loginPopup').modal();
    $('#loginPopup').modal('open');
  };

  $scope.logIn = function() {
      $('#loginPopup').modal('close');
      $scope.userLoggedIn = true;
  };

  UserDashboardService.getUserInfo().then(function(data) {
      $scope.users = data.data;
      $scope.user = $scope.users[0];

      return UserDashboardService.getUserOrders($scope.user._id)
  }).then(function(data) {
      if(data.data.length !== undefined) {
        $scope.userOrderedDishes = data.data;
      };
  });

});