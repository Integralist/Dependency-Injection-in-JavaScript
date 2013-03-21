if (!Array.prototype.map) {
    $script('scripts/polyfills/ArrayMap.js');
}

var Injector = {

    dependencies: {},
    
    // We parse out the dependencies passed to the `target` 
    // then we invoke the target and pass through the retrieved dependencies
    process: function(target) {
        var fn_args = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
            text    = target.toString(),
            args    = text.match(fn_args)[1].split(',');
        
        target.apply(target, this.getDependencies(args));
    },
    
    getDependencies: function(arr) {
        var self = this;
        return arr.map(function(value) {
            return self.dependencies[value];
        });
    },
    
    register: function(name, dependency) {
        this.dependencies[name] = dependency;
    }

};