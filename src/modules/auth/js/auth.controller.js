export default class AuthController {

    constructor($log) {
        $log.info('Hey I am AuthController!');
    }

}

AuthController.$inject = ['$log'];