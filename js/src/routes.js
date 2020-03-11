(function (angular, appName) {
    'use strict';
    var app = angular.module(window.appName);

    function routingConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state({
                name: 'portafolio',
                url: '/',
                templateUrl: '../views/portafolio.html',
            })
            .state({
                name: 'sobre-mi',
                url: '/sobre-mi',
                templateUrl: '../views/sobre-mi.html'
            })

            $urlRouterProvider.otherwise('/');

    }
    routingConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    app.config(routingConfig);

})(window.angular, window.appName);
