export default function routes($stateProvider) {
    'use strict';
    $stateProvider.state('home', {
        url: '/home',
        template: require('../tpl/home.html'),
        controller: 'HomeController',
        controllerAs: 'home',
        data: {
            requireLogin: true
        }
    });
}