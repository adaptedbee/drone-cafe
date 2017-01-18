angular
.module('DroneCafeApp')
.factory('UserDashboardService', function($http) {

    return {

        getUserInfo: function() {
            return $http.get('/api/clients');
        },

        getUserOrder: function() {
            return $http.get('/api/orders');
        }
    }

});