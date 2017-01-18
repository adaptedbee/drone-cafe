var droneCafeApp = angular.module('DroneCafeApp', ['ngRoute', 'ngResource']);

angular.
module('DroneCafeApp')

.config(['$routeProvider',
    function config($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'src/UserDashboard/UserDashboard.html',
                controller: 'UserDashboardCtrl'
            })
            .when('/kitchen', {
                templateUrl: 'src/CookDashboard/CookDashboard.html',
                controller: 'CookDashboardCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);