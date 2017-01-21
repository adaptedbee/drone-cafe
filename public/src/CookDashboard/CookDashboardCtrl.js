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


  $scope.startCooking = function(orderid){
    console.log(orderid);

    CookDashboardService.updateOrderStatus(orderid, 'Cooking').then(function(data) {
        console.log(data.data);

        // update orders lists
    });
  };

  $scope.finishCooking = function(orderid){
    console.log(orderid);

    CookDashboardService.updateOrderStatus(orderid, 'In delivery').then(function(data) {
        console.log(data.data);

        // update orders lists
    });
  };

});