/**
 * Created by darren on 12/6/16.
 */
//initialise door and temp sensors

//create temp object
    //attach sensor 'observers'
function temperature() {
    this.handlers = []; // observer

}

temperature.prototype = {

    val: 55,

    subscribe: function(fn) {
        this.handlers.push(fn);
    },

    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn){
                    return item;
                }
            }
        );
    },

    increase: function(thisObj) {
        console.log("increasing temp object");
        this.val += 1;
        var scope = thisObj || window;
        this.handlers.forEach(function(tmp_obs){
            console.log("triggering temp observer");
            tmp_obs.call(scope, this.val);
        });
    },

    decrease: function(thisObj) {
        console.log("decreasing temp object");
        this.val -= 1;
        var scope = thisObj || window;
        this.handlers.forEach(function(item){
            console.log("triggering temp observer (decrease)");
            item.call(scope, this.val);
        });
    }
};
//create door object
    //attach sensor 'observers'