import AlertMessage from "./alert-message.js";

export default class Test {
    constructor(name) {
        this.message = "Hello";
        this.name = name;
        this.alertMessage = new AlertMessage;
    }

    sayHi() {
        console.log(`${this.message} ${this.name}`);
        this.alertMessage.boost(this.message);
    }
}