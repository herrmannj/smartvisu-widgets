// this function sets the value to the web instantly and starts a timer to send the value delayed to the server
function deviceHmTc_setDelayed(uid, item, val) {
    widget.update(item, val);
    
    obj = $('#' + uid);
    
    // check if there is still a timer
    if (obj.prop("setDelayTimer") != undefined ){
        clearTimeout(obj.prop("setDelayTimer"));
        obj.removeProp("setDelayTimer");
    }
    
    // set timer to send the value delayed
    obj.prop("setDelayTimer", setTimeout(function(){ 
                                           io.write(item, val);
                                           $('#' + uid).removeProp("setDelayTimer");
                                         }, 3000));
                                         
}

$(document).delegate('div[data-widget="device.hmtc"] > div > a[data-icon="minus"]', {
    'click': function (event, response) {
        var uid = $(this).parent().parent().attr('id');
        var step = $('#' + uid).attr('data-step');
        var item = $('#' + uid + 'set').attr('data-item');

        var temp = (Math.round((widget.get(item) - step) * 10) / 10).toFixed(1);
        deviceHmTc_setDelayed(uid, item, temp);
    }
});

$(document).delegate('div[data-widget="device.hmtc"] > div > a[data-icon="plus"]', {
    'click': function (event, response) {
        var uid = $(this).parent().parent().attr('id');
        var step = $('#' + uid).attr('data-step');
        var item = $('#' + uid + 'set').attr('data-item');

        var temp = (Math.round((widget.get(item) * 1 + step * 1) * 10) / 10).toFixed(1);
        deviceHmTc_setDelayed(uid, item, temp);
    }
});
