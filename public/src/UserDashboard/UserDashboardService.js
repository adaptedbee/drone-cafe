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
        },

        updateUserBalance: function(userid, newbalance) {
            let userData = {
                balance: newbalance
            };

            return $http({
                method: 'PUT',
                url: '/api/clients/' + userid,
                data: userData
            });
        }
    }

});