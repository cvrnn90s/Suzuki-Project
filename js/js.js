//Carousel//
$('.carousel').carousel({
		interval: 5000 //
	})
	//Count Down Timer//
var countDownDate = new Date("Dec 11, 2017 12:30:00").getTime();
var x = setInterval(function() {
	var currentDateTime = new Date().getTime();
	var distance = countDownDate - currentDateTime;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);
//Animations//
var $animate_el = $('.animate');
var $browser = $(window);

function check_element_visible() {
	var browser_height = $browser.height();
	var browser_top_position = $browser.scrollTop();
	var browser_bottom_position = (browser_top_position + browser_height);
	$.each($animate_el, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);
		if ((element_bottom_position >= browser_top_position) && (element_top_position <= browser_bottom_position)) {
			$element.addClass('visible');
		} else {
			$element.removeClass('visible');
		}
	});
}
$browser.on('scroll resize', check_element_visible);
$browser.trigger('scroll');