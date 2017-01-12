angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/kitchen', {
			templateUrl: 'views/kitchen.html',
			controller: 'KitchenController'
		})

	// $locationProvider.html5Mode(true);

}]);