angular
.module('DroneCafeApp')
.factory('CookDashboardService', function($http) {

    return {

        getDishes: function(dishStatus) {
            let config = {
                params: {
                    // userId: '777',
                    status: dishStatus
                }
            };
            return $http.get('/api/orders', config);
        }

    }

});