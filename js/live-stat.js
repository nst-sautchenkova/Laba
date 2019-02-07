function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
var bar = $("#live-stat"); 
var hide_bar = getCookie('hide_bar');

if (hide_bar === 'true') {
	bar.addClass('hide');
	bar.removeClass('anim-right');
}

$(document).on("ready", function () {
	$("#stat-hide").click(function() {
		
		if ( ! bar.hasClass('hide')) {
			bar.addClass('hide');
			bar.removeClass('anim-right');
			setCookie('hide_bar','true',999);
		} else {
			bar.removeClass('hide');
			setCookie('hide_bar','false',999);
		}
	});
});
