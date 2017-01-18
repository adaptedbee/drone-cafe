angular
.module('DroneCafeApp')
.factory('UserDashboardService', function($http) {

    return {

        getUserInfo: function() {
            return $http.get('/api/clients');
        },

        getUserOrders: function() {
            let config = {
                params: {
                    // userId: 777
                }
            };
            return $http.get('/api/orders', config);
        }
    }

});