/**
 * Created by darren on 12/7/16.
 */
var temp_observer = function(tmp){
    console.log("changing current temp knob to "+tmp);
    $('input[name=curtempdial]').val(tmp);
}