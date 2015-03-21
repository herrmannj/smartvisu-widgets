	// ----- basic.img ----------------------------------------------------------
$(document).delegate('img[data-widget="basic.img"]', {
	'update': function (event, response) {
	if ($('#' + this.id).attr('alt') == '') {
		$('#' + this.id).attr('src',response);
	}
	else {
		$('#' + this.id).attr('src',$('#' + this.id).attr('src') + response[0].match(new RegExp($('#' + this.id).attr('alt'),'gi')));
	}
	$('#' + this.id).attr('style',"visibility:'display'; width: 100px");	
		// DEBUG: console.log("[basic.img] '" + this.id + "'", response);console.log("[basic.img] '" + this.id + "'", response[0].match(/\d+\-\d\.jpg/gi));
	}
});
