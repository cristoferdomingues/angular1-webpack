import angular from 'angular';

import LoginController from './login-form.controller';

export default angular.module('loginForm.component', [])
    .component('loginForm', {
        template: require('./login-form.tpl.html'),
        controller: LoginController
    })
    .name;