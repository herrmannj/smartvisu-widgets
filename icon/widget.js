// ----- icon.battery ---------------------------------------------------------
$(document).delegate('svg[data-widget="icon.battery"]', {
	'update': function (event, response) {
		// response is: {{ gad_value }}, {{ gad_switch }}

		var val = Math.round((response[0] - $(this).attr('data-min')) / ($(this).attr('data-max') - $(this).attr('data-min')) * 40);
		fx.grid(this, val, [39, 68], [61, 28]);
	}
});
