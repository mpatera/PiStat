/**
 * Created by darren on 12/6/16.
 */

//get desired temp from knob_logic.js
    //modify environment temperature in direction of desired temp

//handle input from door_test.js and use to modify environment door state
var temp = new temperature();

temp.subscribe(temp_observer);

function adjust_temp(dtmp){
    console.log("current temp : "+ctmp+" desired temp : "+dtmp);
    if(dtmp < ctmp){
        console.log("entering cooling loop");
        cool_loop(dtmp);
    }
    if(dtmp > ctmp){
        console.log("entering heating loop");
        heat_loop(dtmp);
    }
}

function heat_loop(dtmp){    //will keep calling itself until val = temp
    console.log("increasing temp..");
    temp.increase();
    if (dtmp > ctmp){
        console.log("waiting 10s before next increase..");
        setTimeout(heat_loop(dtmp), 10000 );
    }
}
function cool_loop(dtmp){    //will keep calling itself until val = temp
    console.log("decreasing temp..");
    temp.decrease();
    if (dtmp < ctmp){
        console.log("waiting 10s before next decrease..");
        setTimeout(cool_loop(dtmp), 10000 );
    }
}



