// ----- basic.auth_switch ---------------------------------------------------------
// ---------------------------------------------------------------------------------

$(document).delegate('span[data-widget="basic.auth_switch"]', {
	'update': function (event, response) {
		$('#' + this.id + ' img').attr('src', (response == $(this).attr('data-val-on') ? $(this).attr('data-pic-on') : $(this).attr('data-pic-off')));
	},
	'click': function (event) {
    
    		// öffnen des popups bei clicken des icons und ausführung der eingabefunktion
    		$('#' + this.id + '-popup').popup( "open" );
	}

});

// ----- basic.auth_flip ---------------------------------------------------------
// ---------------------------------------------------------------------------------
$(document).delegate('select[data-widget="basic.auth_flip"]', {
	'update': function (event, response) {
		$(this).val(response > 0 ? 'on' : 'off').slider('refresh');
	},
	
	'change': function (event) {
 		// öffnen des popups bei clicken des flips und ausführung der eingabefunktion
 		$('#' + this.id + '-popup').popup( "open" );
	}

});
