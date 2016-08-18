export default class LoginController {

    constructor(Login, $log, $state) {
        this.login = Login;
        this.log = $log;
        this.state = $state;
        this.user = {
            name: 'cristofer',
            senha: '321'
        };
    }

    logar(user) {
        let log = this.log;
        let Login = this.login;
        let state = this.state;

        log.info('LoginController.logar', user);
        Login.doLogin(user)
            .then(function () {
                state.go('home');
            })
            .catch(function (err) {
                alert('Error');
                log.error('Error', err);
            });
    }
}

LoginController.$inject = ['Login', '$log', '$state'];