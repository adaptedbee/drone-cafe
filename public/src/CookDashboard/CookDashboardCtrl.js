angular.module('CookDashboardCtrl', []).controller('CookDashboardController', function($scope) {

	$scope.tagline = 'Cook Dashboard';

  $scope.orderedDishes = ['Cheeseburger', 'Apple', 'Potato', 'Tea'];

  $scope.cookingDishes = ['Coffee', 'Chicken', 'Pear', 'Bread'];

});