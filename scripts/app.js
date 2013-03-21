(function(){
    var dependencies = [
        'scripts/injector.js', 
        'scripts/components/greeter_robot.js', 
        'scripts/components/greeter_other.js'
    ];

    $script(dependencies, function init() {
        Injector.register('Greeter', Math.random() > 0.5 ? RobotGreeter : OtherGreeter); // Randomly register a different greeter to show that WelcomeController is truly dynamic.
        
        // Once we've registered our dependencies we can load our components
        $script('scripts/components/greeter.js');
    });
}());