import angular from 'angular';


function privatePage($rootScope, $state) {
    'use strict';
    return {
        priority: 2014,
        restrict: 'A',
        compile: function () {

            function handleLoginRequirement(event, toState) {
                var requireLogin = toState.data ? toState.data.requireLogin : undefined;
                console.log('handleLoginRequirement.requireLogin', requireLogin, $rootScope.currentUser);
                if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
                    event.preventDefault();
                    $state.go('login');
                }
            }

            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                //console.log(1, '$stateChangeStart', event, toState, toParams, fromState, fromParams);
                handleLoginRequirement(event, toState);
            });
        }
    };
}


export default angular.module('auth.directives', [])
    .directive('privatePage', privatePage)
    .name;