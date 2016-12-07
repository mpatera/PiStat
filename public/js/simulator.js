/**
 * Created by darren on 12/6/16.
 */

//get desired temp from knob_logic.js
    //modify environment temperature in direction of desired temp

//handle input from door_test.js and use to modify environment door state
var temp = new temperature();

temp.subscribe(temp_observer);

function adjust_temp(val){
    console.log("current temp : "+temp.val);
    if(val < temp.val){
        console.log("entering cooling loop");
        cool_loop(val);
    }
    if(val > temp.val){
        console.log("entering heating loop");
        heat_loop(val);
    }
}

function heat_loop(val){    //will keep calling itself until val = temp
    console.log("increasing temp..");
    temp.increase();
    if (val > temp.val){
        console.log("waiting 10s before next increase..");
        setTimeout(heat_loop(val), 10000 );
    }
}
function cool_loop(val){    //will keep calling itself until val = temp
    console.log("decreasing temp..");
    temp.decrease();
    if (val < temp.val){
        console.log("waiting 10s before next decrease..");
        setTimeout(cool_loop(val), 10000 );
    }
}



