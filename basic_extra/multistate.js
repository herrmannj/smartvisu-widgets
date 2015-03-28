$(document).delegate('a[data-widget="basic_extra.multistate"]', {
    'update': function (event, response) {
        for(i=1; i < Number.MAX_VALUE; i++) {
            attrName = 'data-val-' + i;
            attrVal = $(this).attr(attrName);
            if ($(this).attr(attrName) == undefined) {
                break;
            }
            if (response == attrVal) {
                $('#' + this.id + ' img').attr('src', $(this).attr('data-pic-' + i));
                break;
            }
        }
    }
});