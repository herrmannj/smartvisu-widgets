// -----------------------------------------------------------------------------
// WIDGET_LED
// -----------------------------------------------------------------------------
$(document).delegate('[data-widget="widget_led.led"]', {
  'update': function (event, response) {
    var led = $('#' + this.id);
    if(response == $(this).attr('data-green-value')) {
      led.removeClass();
      led.addClass("LED LED-green");
    }
    else if(response == $(this).attr('data-red-value')) {
      led.removeClass();
      led.addClass("LED LED-red");
    }
    else if(response == $(this).attr('data-blue-value')) {
      led.removeClass();
      led.addClass("LED LED-blue");
    }
    else if(response == $(this).attr('data-yellow-value')) {
      led.removeClass();
      led.addClass("LED LED-yellow");
    }
    else {
      led.removeClass();
      led.addClass("LED");
    }
  }});