	// ----- basic.lbutton ---------------------------------------------------------
$(document).delegate('a[data-widget="basic.lbutton"]', {
	'click': function (event) {
		if ($(this).attr('data-val') != '') {
			io.write($(this).attr('data-item'), $(this).attr('data-val'));
		}
	}
});
