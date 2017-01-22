droneCafeApp.controller('CookDashboardCtrl', function($scope, CookDashboardService) {

  CookDashboardService.getDishes('Ordered').then(function(data) {
      $scope.orderedDishes = data.data;
  });

  CookDashboardService.getDishes('Cooking').then(function(data) {
      $scope.cookingDishes = data.data;
  });


  $scope.startCooking = function(orderid){
    CookDashboardService.updateOrderStatus(orderid, 'Cooking').then(function(data) {
        // console.log(data.data);

        // update orders lists
    });
  };

  $scope.finishCooking = function(orderid){
    CookDashboardService.updateOrderStatus(orderid, 'In delivery').then(function(data) {
        // console.log(data.data);

        // update orders lists
    });
  };

});