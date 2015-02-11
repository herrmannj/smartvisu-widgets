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
