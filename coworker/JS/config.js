angular.module('cwrk',['ngRoute']).config(['$locationProvider', 'routeProvider',function config($locationProvider,$routeProvider){

    // $locationProvider.hashPrefix('!');

    $routeProvider.
        when('/home', {
            templateUrl:'Views/home.html',
            controller: 'cwrkCtrl'
        }

        );
}]);