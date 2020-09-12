export default class AlertMessage {
    constructor() {
        this.defaultSplash = "Who's there?"
    }

    splash(message = this.defaultSplash) {
        alert(message);
    }
}