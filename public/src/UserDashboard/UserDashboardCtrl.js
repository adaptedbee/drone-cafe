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

  UserDashboardService.getUserOrder().then(function(data) {
      $scope.orders = data.data;
      $scope.userOrder = $scope.orders[0];
      $scope.userOrderedDishes = $scope.userOrder.dishes;
  }, function(error) {
      console.log('Error: ' + error);
  });

});