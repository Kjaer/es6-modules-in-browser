import AlertMessage from "./alert.js";

export default class Greeting {
    constructor(name) {
        this.message = "Hello";
        this.name = name;
        this.alertMessage = new AlertMessage();
    }

    consoleMessage(person) {
        console.log(`${this.message} ${person}`);
    }

    sayHi() {
        this.consoleMessage(this.name);
    }

    alertHi() {
        this.alertMessage.splash(this.message);
    }
}