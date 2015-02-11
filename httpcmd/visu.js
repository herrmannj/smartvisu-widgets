// ----- basic.httpcmd ----------------------------------------------------------
$(document).delegate('a[data-widget="basic.httpcmd"]', {
	'click': function (event) {
		$.ajax($(this).attr('data-val'));
	}
});
