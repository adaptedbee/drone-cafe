droneCafeApp.controller('CookDashboardCtrl', function($scope, CookDashboardService) {

  let socket = io();

  CookDashboardService.getDishes('Ordered').then(function(data) {
      $scope.orderedDishes = data.data;
  });

  CookDashboardService.getDishes('Cooking').then(function(data) {
      $scope.cookingDishes = data.data;
  });


  $scope.startCooking = function(order, orderIndex){
    order.status = 'Cooking';
    $scope.orderedDishes.splice(orderIndex, 1);
    $scope.cookingDishes.push(order);

    socket.emit('order status changed', order);

    CookDashboardService.updateOrderStatus(order._id, 'Cooking').then(function(data) {
        // console.log(data.data);
    });
  };

  $scope.finishCooking = function(order, orderIndex){
    order.status = 'In delivery';
    $scope.cookingDishes.splice(orderIndex, 1);

    socket.emit('order status changed', order);

    CookDashboardService.updateOrderStatus(order._id, 'In delivery').then(function(data) {
        // console.log(data.data);
    });
  };

  socket.on('new order created', function(){
    // console.log(order);

    CookDashboardService.getDishes('Ordered').then(function(data) {
      if(data.data.length !== undefined) {
        $scope.orderedDishes = data.data;
      };
    });

  });
  socket.on('connect_error', function() {
    console.log('Disconnected from server');
    socket.disconnect();
  });

});