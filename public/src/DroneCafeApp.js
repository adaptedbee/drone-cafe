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

// .config(['$httpProvider', function($httpProvider) {
//     $httpProvider.defaults.headers.common = {
//         "application-id": "FA990639-222E-29E0-FF58-DEF01A2D0300",
//         "secret-key": "37178C9F-5803-AAE4-FF5E-184AB76C4100"
//     };

// }]);