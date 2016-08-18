import angular from 'angular';


function jtechLayout($rootScope, $state) {
    'use strict';
    return {
        priority: 2014,
        restrict: 'A',
        compile: function () {

        }
    };
}


export default angular.module('app.directives', [])
    .directive('jtechLayout', jtechLayout)
    .name;