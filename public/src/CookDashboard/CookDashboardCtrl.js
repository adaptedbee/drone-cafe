'use strict';

droneCafeApp.controller('CookDashboardCtrl', function($scope, CookDashboardService) {

  CookDashboardService.getDishes('Ordered').then(function(data) {
      $scope.orderedDishes = data.data;
  }, function(error) {
      console.log('Error: ' + error);
  });

  CookDashboardService.getDishes('Cooking').then(function(data) {
      $scope.cookingDishes = data.data;
  }, function(error) {
      console.log('Error: ' + error);
  });

});