import 'bootstrap/dist/css/bootstrap.css';

import '../style/app.css';

import angular from 'angular';

import uirouter from 'angular-ui-router';

import routing from './app.config';

import auth from '../modules/auth';

import home from '../modules/home';

import jtechLayout from './app.directives';





angular.module('app', [uirouter, auth, home, jtechLayout])
    .config(routing);