angular
.module('DroneCafeApp')
.factory('UserDashboardService', function($http) {

    return {

        getUserInfo: function() {
            return $http.get('/api/clients');
        },

        getUserOrders: function(userid) {
            let config = {
                params: {
                    userId: userid
                }
            };
            return $http.get('/api/orders', config);
        }
    }

});