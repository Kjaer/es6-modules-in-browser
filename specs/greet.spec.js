import Greeting from "../greet.js";

describe('greeting', function() {
  let greeting;

  beforeEach(() => {
    greeting = new Greeting("Capt. Anonymous");
  });
  
  it('it greets you silently', () => {
    spyOn(greeting, 'consoleMessage');
    
    greeting.sayHi();

    expect(greeting.consoleMessage).toHaveBeenCalledWith("Capt. Anonymous");
  });

  it('it greets you loudly', () => {
    spyOn(greeting.alertMessage, 'splash');
    
    greeting.alertHi();

    expect(greeting.alertMessage.splash).toHaveBeenCalledWith("Hello");
  });

});
