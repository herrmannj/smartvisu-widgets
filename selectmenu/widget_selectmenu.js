	// ----- basic.select_single -------------------------------------------------------
$(document).delegate('select[data-widget="basic.selectmenu"]', {
	'update': function (event, response) {
		var prog = response[0].match(/prog[123]/g);
		$(this).val(prog).selectmenu('refresh');
		// DEBUG: console.log("[basic.selectmenu] update '" + this.id + "': aktuell: " +  $(this).attr('selected'), response); 
	},

	'change': function (event) {
		io.write($(this).attr('data-item'), $(this).val());
		// DEBUG: console.log("[basic.selectmenu] change '" + this.id + "':", $(this).prop('selected')); 
	}
});
