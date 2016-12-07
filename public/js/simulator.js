/**
 * Created by darren on 12/6/16.
 */

//get desired temp from knob_logic.js
    //modify environment temperature in direction of desired temp

//handle input from door_test.js and use to modify environment door state
var temp = new temperature();

temp.subscribe(temp_observer);

function heat_loop(val){    //will keep calling itself until val = temp
    temp.increase();
    if (val > temp.val()){
        setTimeout(heat_loop(val), 10000 );
    }
}
function cool_loop(val){    //will keep calling itself until val = temp
    temp.decrease();
    if (val < temp.val()){
        setTimeout(cool_loop(val), 10000 );
    }
}



