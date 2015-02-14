For UZSU widget, look here: https://github.com/mworion/uzsu_widget

For UZSU converter and additional needed code, look here: https://github.com/herrmannj/fronthem

especially here: https://github.com/herrmannj/fronthem/blob/master/FHEM/99_fronthemUtils.pm

SmartVISU usage example:

      {% import "widget_uzsu.html" as visu %}
      {{ visu.uzsu_icon('UZSU', 'Roll_EG_uzsu', '', '', '', '', 'num') }}

Fronthem config example:

      {
      "EG_blind_uzsu" : {
         "reading" : "uzsu",
         "type" : "item",
         "converter" : "UZSU",
         "device" : "Roll_EG",
         "set" : "uzsu"
      },

You need a fhem notify to trigger the uzsu_execute function:
   
     define UZSU notify .*:uzsu:.* { UZSU_execute($NAME, $EVTPART1) }
