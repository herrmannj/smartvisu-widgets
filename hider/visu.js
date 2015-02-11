	// ----- basic.hider-----------------------------------------------------
$(document).delegate('div[data-widget="basic.hider"]', {
	'init': function (event) {
	},
		
	'update': function (event, response) {
if (response == '') {
		$(this).html("");
//css("visibility", "hidden");
	}
}
});
	
