I created a simple way to have a live duration of states of fhem devices shown in SmartVisu. Therefore i have build a fhem notify which reports the duration of the actual state of a device to a new reading live_duration:

    define n_Terrassentuer_timer notify Terrassentuer.open|Terrassentuer.closed {if (Value($NAME) eq 'closed') {fhem 'delete a_'.$NAME.'_timer'} else {fhem 'setreading '.$NAME.' duration_live 0';;;;fhem 'define a_'.$NAME.'_timer at +*00:00:01 {fhem "setreading '.$NAME.' duration_live ".eval(ReadingsVal("'.$NAME.'","duration_live","0") + 1)}'}}
    
Now you can use the timecounter widget to show the seconds in SmartVISU in the format MM:SS

Known issues:
- no correct behaviour for time > 59 minutes
