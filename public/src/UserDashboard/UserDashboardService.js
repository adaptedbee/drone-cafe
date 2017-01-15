angular
.module('DroneCafeApp')
.factory('UserDashboardService', function($http) {

    const apiUrl = 'https://api.mlab.com/api/1/databases/drone-cafe/collections';
    const apiKey = '?apiKey=D6u9mshBv5A9himB4ncluNapteQcnSd6';

    return {

        getUserInfo: function() {
            return $http.get(apiUrl + '/clients' + apiKey);
        },

        getUserOrder: function() {
            return $http.get(apiUrl + '/orders' + apiKey);
        }
    }

});