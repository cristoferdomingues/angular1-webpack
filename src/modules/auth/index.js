import './auth.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './js/auth.routes';
import AuthController from './js/auth.controller';
import LoginComponent from './components/login/login-form.component';
import Login from './js/login.service';
import privatePage from './js/auth.directives';


export default angular.module('app.auth', [uirouter, Login, LoginComponent, privatePage])
    .config(routing)
    .controller('AuthController', AuthController)
    .name;