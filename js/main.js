$(document).ready(function() {
    //navbar
    var stickyNavTop = $('#navbar').offset().top;
	var stickyNav = function(){
		var scrollTop = $(window).scrollTop();
		if (scrollTop > stickyNavTop) {
			$('#navbar').addClass('bg-opacity-75');
		} else {
			$('#navbar').removeClass('bg-opacity-75');
		}
	};
	stickyNav();
	$(window).scroll(function() {
		stickyNav();
	});

    //anchor
    $('.anchor').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });

    //aos
    AOS.init();

	//anchor-link
	$('.anchor-link').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});

	//to top
	if ($('#ToTop').length) {
		var scrollTrigger = 100, // px
		backToTop = function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > scrollTrigger) {
			$('#ToTop').addClass('show');
			} else {
				$('#ToTop').removeClass('show');
			}
		};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#ToTop').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
});