import angular from 'angular';

class LoginService {

    constructor($q, $rootScope) {
        this.$q = $q;
        this.$rootScope = $rootScope;
    }

    setCurrentUser(user) {
        this.$rootScope.currentUser = user;
    }

    getCurrentUser() {
        return this.$rootScope.currentUser;
    }

    doLogin(user) {

        let q = this.$q.defer();
        if (user.name === 'cristofer' && user.senha === '321') {
            this.setCurrentUser(user);
            q.resolve(user);
        } else {
            q.reject({
                message: 'Usuário ou senha Inválidos'
            });
        }
        return q.promise;
    }
}

export default angular.module('login.service', [])
    .service('Login', LoginService)
    .name;