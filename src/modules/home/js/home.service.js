import angular from 'angular';

class HomeService {
    constructor(Login) {
        this.loginService = Login;
    }

    getWelcomeMessage() {
        return 'Welcome ' + this.loginService.getCurrentUser().name;
    }
}

HomeService.$inject = ['Login'];

export default angular.module('home.service', [])
    .service('HomeService', HomeService)
    .name;