/**
 * Created by darren on 12/6/16.
 */
//initialise door and temp sensors

//create temp object
    //attach sensor 'observers'

var ctmp = 55;

function temperature() {
    this.handlers = []; // observer

}

temperature.prototype = {


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
        ctmp += 1;
        var scope = thisObj || window;
        this.handlers.forEach(function(tmp_obs){
            console.log("triggering temp observer to "+ctmp);
            tmp_obs.call(scope, ctmp);
        });
    },

    decrease: function(thisObj) {
        console.log("decreasing temp object");
        ctmp -= 1;
        var scope = thisObj || window;
        this.handlers.forEach(function(item){
            console.log("triggering temp observer (decrease)");
            item.call(scope, ctmp);
        });
    }
};
//create door object
    //attach sensor 'observers'