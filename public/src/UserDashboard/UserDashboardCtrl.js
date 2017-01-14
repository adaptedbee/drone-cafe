'use strict';

angular.module('UserDashboardCtrl', []).controller('UserDashboardController', function($scope) {

	// $scope.tagline = 'User Dashboard';
  $scope.userLoggedIn = false;

  $scope.openLoginPopup = function(){
    $('#loginPopup').modal();
    $('#loginPopup').modal('open');
  };

  $scope.logIn = function() {
      $('#loginPopup').modal('close');
      // $scope.userLoggedIn = true;
      $scope.userLoggedIn = !$scope.userLoggedIn;
  };

  $scope.user = {
    name: "John Doe",
    balance: 50
  };

  $scope.userOrderedDishes = [
    {
      name: 'Pizza',
      status: 'Ordered'
    },
    {
      name: 'Hamburger',
      status: 'Cooking'
    },
    {
      name: 'Pie',
      status: 'In delivery'
    },
    {
      name: 'Cola',
      status: 'In trouble'
    },
    {
      name: 'Pepsi',
      status: 'Served'
    }
  ];

});