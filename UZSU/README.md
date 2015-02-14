For UZSU widget, look here: https://github.com/mworion/uzsu_widget

For UZSU converter and additional needed code, look here: https://github.com/herrmannj/fronthem

especially here: https://github.com/herrmannj/fronthem/blob/master/FHEM/99_fronthemUtils.pm

Fronthem config example:
      {
      "EG_blind_uzsu" : {
         "reading" : "uzsu",
         "type" : "item",
         "converter" : "UZSU",
         "device" : "Roll_EG",
         "set" : "uzsu"
      },
