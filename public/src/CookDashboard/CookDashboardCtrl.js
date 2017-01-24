droneCafeApp.controller('CookDashboardCtrl', function($scope, CookDashboardService) {

  CookDashboardService.getDishes('Ordered').then(function(data) {
      $scope.orderedDishes = data.data;
  });

  CookDashboardService.getDishes('Cooking').then(function(data) {
      $scope.cookingDishes = data.data;
  });


  $scope.startCooking = function(order, orderIndex){
    $scope.orderedDishes.splice(orderIndex, 1);
    $scope.cookingDishes.push(order);

    CookDashboardService.updateOrderStatus(order._id, 'Cooking').then(function(data) {
        // console.log(data.data);

        // update orders lists
    });
  };

  $scope.finishCooking = function(order, orderIndex){
    $scope.cookingDishes.splice(orderIndex, 1);

    CookDashboardService.updateOrderStatus(order._id, 'In delivery').then(function(data) {
        // console.log(data.data);

        // update orders lists
    });
  };

});