export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
    'use strict';
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('app', {
            abstract: true,
            url: '/interno',
            controller: 'AppController',
            controllerAs: 'app',
            data: {
                requireLogin: true
            }
        });

    $urlRouterProvider.otherwise('/');
}
routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];