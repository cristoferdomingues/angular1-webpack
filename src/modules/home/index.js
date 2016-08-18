import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './js/home.routes';
import HomeController from './js/home.controller';
import HomeService from './js/home.service';
import LoginService from '../auth/js/login.service';

export default angular.module('home', [HomeService, LoginService, uirouter])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;