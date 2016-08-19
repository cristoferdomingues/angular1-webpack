import 'bootstrap/dist/css/bootstrap.css';

//import 'font-awesome/css/font-awesome.min.css';

import '../style/main.css';

import '../style/app.css';


import angular from 'angular';

import uirouter from 'angular-ui-router';

import uibootstrap from 'angular-ui-bootstrap';

import routing from './app.config';

import auth from '../modules/auth';

import home from '../modules/home';




angular.module('app', [uirouter, uibootstrap, auth, home])
    .config(routing);