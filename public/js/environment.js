/**
 * Created by darren on 12/6/16.
 */
//initialise door and temp sensors

//create temp object
    //attach sensor 'observers'
function temperature() {
    val: 55,
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
        this.val += 1;
        var scope = thisObj || window;
        this.handlers.forEach(function(tmp_obs){
            tmp_obs.call(scope, this.val);
        });
    },

    decrease: function(thisObj) {
        this.val -= 1;
        var scope = thisObj || window;
        this.handlers.forEach(function(item){
            item.call(scope, this.val);
        });
    }
};
//create door object
    //attach sensor 'observers'