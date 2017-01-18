'use strict';

droneCafeApp.controller('CookDashboardCtrl', function($scope, CookDashboardService) {

  CookDashboardService.getOrderedDishes().then(function(data) {
      $scope.dishesInOrder = data.data[0].dishes;
      $scope.orderedDishes = $scope.dishesInOrder.filter(function(item){
          return item.status == 'Ordered';
      });
      // console.log($scope.orderedDishes);
  }, function(error) {
      console.log('Error: ' + error);
  });

  CookDashboardService.getCookingDishes().then(function(data) {
      $scope.dishesInOrder = data.data[0].dishes;
      $scope.cookingDishes = $scope.dishesInOrder.filter(function(item){
          return item.status == 'Cooking';
      });
      // console.log($scope.cookingDishes);
  }, function(error) {
      console.log('Error: ' + error);
  });

});