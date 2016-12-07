/**
 * Created by mattpatera on 12/6/16.
 */
var temp_observer = function(tmp){
    console.log("changing current temp knob");
    $('.cur_knob').val(tmp).trigger('change');
}