The widgets in widget_fritzbox rely on fhem devices based on module FRITZBOX and FB_CALLMONITOR.

see 
    http://fhem.de/commandref.html#FB_CALLMONITOR
    http://fhem.de/commandref.html#FRITZBOX

So start with exploring these devices in fhem and then adding SmartVISU widgets for using them in SV!

       "FB_name" : {
         "reading" : "box_model",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
       
       "FB_version" : {
         "reading" : "box_fwVersion",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
      "FB_wlan24" : {
         "reading" : "box_wlan_2.4GHz",
         "type" : "item",
         "converter" : "OnOff",
         "device" : "FB7390",
         "set" : "wlan"
      },
      
      "FB_wlan5" : {
         "reading" : "box_wlan_5GHz",
         "type" : "item",
         "converter" : "OnOff",
         "device" : "FB7390",
         "set" : "wlan"
      },
      
       "FB_dect" : {
         "reading" : "box_dect",
         "type" : "item",
         "converter" : "OnOff",
         "device" : "FB7390",
         "set" : null
      },
      
      "FB_alarm1_name" : {
         "reading" : "alarm1",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
       "FB_alarm1_time" : {
         "reading" : "alarm1_time",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : "alarm1_time"
      },
      
      "FB_alarm1_target" : {
         "reading" : "alarm1_target",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
        "FB_alarm1_wdays" : {
         "reading" : "alarm1_wdays",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : "alarm1_wdays"
      },
      
      "FB_alarm1_state" : {
         "reading" : "alarm1_state",
         "type" : "item",
         "converter" : "OnOff",
         "device" : "FB7390",
         "set" : "alarm 1"
      },
      
       "FB_dect1_name" : {
         "reading" : "dect1",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
      "FB_dect1_model" : {
         "reading" : "dect1_model",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
      "FB_dect1_version" : {
         "reading" : "dect1_fwVersion",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
      "FB_dect1_number" : {
         "reading" : "dect1_intern",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
      "FB_dect1_manufacturer" : {
         "reading" : "dect1_manufacturer",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
       "FB_dect1_image" : {
         "reading" : "dect1_imagePath ",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
       "FB_dect1_internringtone" : {
         "reading" : "dect1_intRingTone",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
      "FB_dect1_alarmringtone" : {
         "reading" : "dect1_alarmRingTone",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
       "FB_dect1_radio" : {
         "reading" : "dect1_radio",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
       "FB_tam1_name" : {
         "reading" : "tam1",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
      "FB_tam1_state" : {
         "reading" : "tam1_state",
         "type" : "item",
         "converter" : "OnOff",
         "device" : "FB7390",
         "set" : "tam 1"
      },
      
       "FB_tam1_newMsg" : {
         "reading" : "tam1_newMsg",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
      "FB_tam1_oldMsg" : {
         "reading" : "tam1_oldMsg",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
      "FB_user1_name" : {
         "reading" : "user01",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
      "FB_user1_type" : {
         "reading" : "user01_type",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
       "FB_user1_todayTime" : {
         "reading" : "user01_todayTime",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
      "FB_user1_todaysec" : {
         "reading" : "user01_todaySeconds",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
      "FB_user1_monthtime" : {
         "reading" : "user01_thisMonthTime",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
      "FB_fon1_name" : {
         "reading" : "fon1",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
      "FB_fon1_number" : {
         "reading" : "fon1_intern",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FB7390",
         "set" : null
      },
      
       "FB_event" : {
         "reading" : "event",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FBCallmonitor",
         "set" : null
      },

       "FB_direction" : {
         "reading" : "direction",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FBCallmonitor",
         "set" : null
      },
      
      "FB_duration" : {
         "reading" : "duration_live",
         "type" : "item",
         "converter" : "NumDisplay",
         "device" : "FBCallmonitor",
         "set" : null
      },
      
       "FB_call_timestamp" : {
         "reading" : "event",
         "type" : "item",
         "converter" : "ReadingsTimestamp",
         "device" : "FBCallmonitor",
         "set" : null
      },
      
       "FB_intnumber" : {
         "reading" : "internal_number",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FBCallmonitor",
         "set" : null
      },
      
       "FB_intconn" : {
         "reading" : "internal_connection",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FBCallmonitor",
         "set" : null
      },
      
       "FB_extconn" : {
         "reading" : "external_connection",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FBCallmonitor",
         "set" : null
      },
      
       "FB_extnumber" : {
         "reading" : "external_number",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FBCallmonitor",
         "set" : null
      },
      
      "FB_extname" : {
         "reading" : "external_name",
         "type" : "item",
         "converter" : "Direct",
         "device" : "FBCallmonitor",
         "set" : null
      },
