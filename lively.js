var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
var navOpen = function() {
	$('nav').slideUp();
	if (isMobile || $(window).width() < 1275) {
		$('#content').animate({
			marginLeft: '110px'
		});
	}
	else {
		$('#content').animate({
			marginLeft: '150px'
		});
	}

	$('#sidebar').delay(200).slideDown();
};

var navClose = function() {
	$('#sidebar').slideUp();
	$('#content').delay(300).animate({
		marginLeft: '0px'
	});
	$('nav').slideDown();
};

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	if(!isMobile) {
		$('#sidebar').hide();
		$('nav').click(navOpen);
		$('#backButton').click(navClose);
	}
	else {
		$('#sidebar').remove();
	}

});