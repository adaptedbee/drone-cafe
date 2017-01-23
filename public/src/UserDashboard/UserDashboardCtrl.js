droneCafeApp.controller('UserDashboardCtrl', function($scope, UserDashboardService) {

  $scope.userLoggedIn = false;
  $scope.dishesDisplayed = false;
  $scope.dishes = [];

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

  $scope.addDishToOrder = function(dishid, dishprice){
    $scope.user.balance = $scope.user.balance - dishprice;

    UserDashboardService.updateUserBalance($scope.user._id, $scope.user.balance).then(function(data) {
        // console.log(data.data);
    });


    UserDashboardService.createNewOrder($scope.user._id, dishid).then(function(data) {
        // console.log(data.data);
    });

    // get user info again
    // get user orders again
  };

  $scope.makeIngredientsList = function(ingredientsArray){
    let ingredientsList = ingredientsArray.reduce(function(string, current) {
      return string + current + ", ";
    }, "");

    ingredientsList = ingredientsList[0].toUpperCase() + ingredientsList.substr(1, ingredientsList.length - 3) + ".";

    return ingredientsList;
  };

});