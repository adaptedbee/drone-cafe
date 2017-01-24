droneCafeApp.controller('UserDashboardCtrl', function($scope, UserDashboardService) {

  $scope.userLoggedIn = false;
  $scope.dishesDisplayed = false;
  $scope.dishes = [];
  let socket = io();

  $scope.openLoginPopup = function(){
    $('#loginPopup').modal();
    $('#loginPopup').modal('open');
  };

  $scope.logIn = function(user) {
      $('#loginPopup').modal('close');
      $scope.userLoggedIn = true;

      $scope.user = user;

      UserDashboardService.getUserInfo($scope.user).then(function(data) {
          // console.log(data.data);

          if(data.data.length == 0) {
            $scope.user.balance = 100;
            UserDashboardService.createNewUser($scope.user).then(function(data) {
                // console.log(data.data);
            });
          } else {
            $scope.users = data.data;
            $scope.user = $scope.users[0];
          }

          return UserDashboardService.getUserOrders($scope.user._id)
      }).then(function(data) {

          // console.log(data.data);
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

  $scope.showDishes = function(){
    $scope.dishesDisplayed = true;

    UserDashboardService.getDishesList().then(function(data) {
        // console.log(data.data);

        $scope.dishes = data.data;
    });
  };

  $scope.addDishToOrder = function(dishid, dishtitle, dishprice){
    $scope.user.balance = $scope.user.balance - dishprice;

    UserDashboardService.updateUserBalance($scope.user._id, $scope.user.balance).then(function(data) {
        // console.log(data.data);
    });

    UserDashboardService.createNewOrder($scope.user._id, dishid).then(function(data) {
        // console.log(data.data);
    });
  };

  $scope.makeIngredientsList = function(ingredientsArray){
    let ingredientsList = ingredientsArray.join(', ');

    ingredientsList = ingredientsList[0].toUpperCase() + ingredientsList.substr(1, ingredientsList.length - 3) + ".";

    return ingredientsList;
  };

  $scope.orderAgain = function(order){
    order.status = 'Ordered';

    // $scope.user.balance = $scope.user.balance - dishprice*0.95;

    console.log(order);

    UserDashboardService.updateUserBalance($scope.user._id, $scope.user.balance).then(function(data) {
        // console.log(data.data);
    });

    UserDashboardService.updateOrderStatus(order._id, 'Ordered').then(function(data) {
        // console.log(data.data);
    });
  };

  $scope.cancelOrder = function(order, orderIndex){
    $scope.userOrderedDishes.splice(orderIndex, 1);

    UserDashboardService.deleteOrder(order._id).then(function(data) {
        // console.log(data.data);
    });
  };

  socket.on('new order created', function(){
    // console.log(order);

    UserDashboardService.getUserOrders($scope.user._id).then(function(data) {
      if(data.data.length !== undefined) {
        $scope.userOrderedDishes = data.data;
      };
    });
  });

  socket.on('order status changed', function(order){
    // console.log(order);

    for (let i=0; i<$scope.userOrderedDishes.length; i++){
      if($scope.userOrderedDishes[i]._id == order._id){
        $scope.userOrderedDishes[i].status = order.status;
        $scope.$apply();
        break;
      }
    };
  });

  socket.on('connect_error', function() {
    console.log('Disconnected from server');
    socket.disconnect();
  });

});