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
  }, function(error) {
      console.log('Error: ' + error);
  });

  UserDashboardService.getUserOrders().then(function(data) {
      $scope.userOrderedDishes = data.data;
  }, function(error) {
      console.log('Error: ' + error);
  });

});