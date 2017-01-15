angular
.module('DroneCafeApp')
.factory('CookDashboardService', function($http) {

    const apiUrl = 'https://api.mlab.com/api/1/databases/drone-cafe/collections';
    const apiKey = '?apiKey=D6u9mshBv5A9himB4ncluNapteQcnSd6';

    return {

        getOrderedDishes: function() {
            return $http.get(apiUrl + '/orders' + apiKey);
            // {status:'Ordered'}
        },

        getCookingDishes: function() {
            return $http.get(apiUrl + '/orders' + apiKey);
            // {status:'Cooking'}
        }

    }

});