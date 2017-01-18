angular
.module('DroneCafeApp')
.factory('CookDashboardService', function($http) {

    return {

        getOrderedDishes: function() {
            return $http.get('/api/orders');
            // {status:'Ordered'}
        },

        getCookingDishes: function() {
            return $http.get('/api/orders');
            // {status:'Cooking'}
        }

    }

});