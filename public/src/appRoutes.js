angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'src/UserDashboard/UserDashboard.html',
			controller: 'UserDashboardController'
		})

		.when('/kitchen', {
			templateUrl: 'src/CookDashboard/CookDashboard.html',
			controller: 'CookDashboardController'
		})

	// $locationProvider.html5Mode(true);

}]);