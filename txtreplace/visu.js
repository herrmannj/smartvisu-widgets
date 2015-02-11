// ----- basic.textrpl ----------------------------------------------------------
$(document).delegate('span[data-widget="basic.textrpl"]', {
	'update': function (event, response) {
		var UTF8response=response[0].replace(/ÃÂ¼/g, "ü");
		UTF8response=UTF8response.replace(/ÃÂ¤/g, "ä");
		UTF8response=UTF8response.replace(/ÃÂ¶/g, "ö");
		UTF8response=UTF8response.replace(/Ã¢ÂÂ¬/g, "€");		
		$('#' + this.id).html(UTF8response);
	}
});
