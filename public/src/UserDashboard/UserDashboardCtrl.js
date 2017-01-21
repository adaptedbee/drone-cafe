'use strict';

droneCafeApp.controller('UserDashboardCtrl', function($scope, UserDashboardService) {

  $scope.userLoggedIn = false;

  $scope.openLoginPopup = function(){
    $('#loginPopup').modal();
    $('#loginPopup').modal('open');
  };

  $scope.logIn = function(user) {
      $('#loginPopup').modal('close');
      $scope.userLoggedIn = true;

      $scope.user = user;

      UserDashboardService.getUserInfo($scope.user).then(function(data) {
          console.log(data.data);

          if(data.data.length == 0) {
            $scope.user.balance = 100;
            UserDashboardService.createNewUser($scope.user).then(function(data) {
                console.log(data.data);
            });
          } else {
            $scope.users = data.data;
            $scope.user = $scope.users[0];
          }

          return UserDashboardService.getUserOrders($scope.user._id)
      }).then(function(data) {
          if(data.data.length !== undefined) {
            $scope.userOrderedDishes = data.data;
          };
      });
  };

  $scope.addFunds = function(){
    $scope.user.balance = $scope.user.balance + 100;

    UserDashboardService.updateUserBalance($scope.user._id, $scope.user.balance).then(function(data) {
        // console.log(data.data);
    });
  };

  $scope.openDishesPopup = function(){
    $('#dishesPopup').modal();
    $('#dishesPopup').modal('open');
  };

});