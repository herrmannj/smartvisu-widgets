	// ----- basic.timecounter-----------------------------------------------------
$(document).delegate('span[data-widget="basic.timecounter"]', {
	'init': function (event) {
	},
	'update': function (event, response) {
		$(this).html(ZeitAnzeigen($(this).attr('id'), $(this).attr('data'), response));
	}
});
