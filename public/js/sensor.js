/**
 * Created by darren on 12/6/16.
 */
var sensor = {
    cur_val: 55,
    open: false,
    change: function(dir,type) {
        if (type == 0){ //temperature
            if (dir > 0) {
                cur_val += 1;
            }
            else {
                cur_val -= 1;
            }
        }
        else{       //door
            if(dir == 1){
                open = true;
            }
            else{
                open = false;
            }
        }
    }
}