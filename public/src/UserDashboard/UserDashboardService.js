angular
.module('DroneCafeApp')
.factory('UserDashboardService', function($http) {

    return {

        getUserInfo: function(user) {
            let config = {
                params: {
                    name: user.name,
                    email: user.email
                }
            };
            return $http.get('/api/clients', config);
        },

        createNewUser: function(user) {
            let userData = {
                name: user.name,
                email: user.email
            };

            return $http({
                method: 'POST',
                url: '/api/clients',
                data: userData
            });
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