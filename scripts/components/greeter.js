function WelcomeController(Greeter) {
    console.log(Greeter.greet());
};

Injector.process(WelcomeController);