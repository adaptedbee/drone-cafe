angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'src/Home/Home.html',
			controller: 'HomeController'
		})

		.when('/kitchen', {
			templateUrl: 'src/Kitchen/Kitchen.html',
			controller: 'KitchenController'
		})

	// $locationProvider.html5Mode(true);

}]);