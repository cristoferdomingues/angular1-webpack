export default class HomeController {
    constructor(HomeService) {
        console.log('Home Controller');
        this.welcomeMessage = HomeService.getWelcomeMessage();
    }
}

HomeController.$inject = ['HomeService'];