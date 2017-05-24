//
//$(document).ready(function () {
//	$('a[href^="#"]').click(function () {
//		var el = $(this).attr('href');
//		$('body').animate({
//			scrollTop: $(el).offset().top
//		}, 1500);
//		return false;
//	});
//});




;
(function ($) {


	$(window).on('load', function () {



		var $grid = $('.portfolio-gallery__grid').isotope({
			itemSelector: '.portfolio-gallery__grid-item',
			layoutMode: 'masonry',
			masonry: {
				gutter: 10
			}
		});

		$('.portfolio-gallery__nav').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});

		$(".team-slider__about").mCustomScrollbar({
			axis: "y",
			theme: "dark-thick"
		});

		$('.team-slider').slick({
			dots: true,
			arrows: false,

		});
		$('.testimonials-slider').slick({
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000

		});

		$('.nav__link-top').gotop({
			background: 'rgb(25,189,153)',
			customHtml: '<i class="fa fa-angle-up" aria-hidden="true"></i>'

		});

		new WOW().init();

		//		$('a[href^="#"]').click(function () {
		//		var el = $(this).attr('href');
		//		$('body').animate({
		//			scrollTop: $(el).offset().top
		//		}, 1500);
		//		return false;
		//	});
		$(document).on('click', 'a', function (event) {
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 1500);
		});

	});
})(jQuery);

function initMap() {
	var uluru = {
		lat: 46.48687341,
		lng: 30.7325913
	};
	var map = new google.maps.Map(document.getElementById('map'), {
		center: uluru,
		zoom: 15,
		styles: [
			{
				elementType: 'geometry',
				stylers: [{
					color: '#242f3e'
				}]
			},
			{
				elementType: 'labels.text.stroke',
				stylers: [{
					color: '#242f3e'
				}]
			},
			{
				elementType: 'labels.text.fill',
				stylers: [{
					color: '#30D5C8'
				}]
			},
			{
				featureType: 'administrative.locality',
				elementType: 'labels.text.fill',
				stylers: [{
					color: '#30D5C8'
				}]
            },
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [{
					color: '#30D5C8'
				}]
            },
			{
				featureType: 'road',
				elementType: 'geometry.stroke',
				stylers: [{
					color: '#30D5C8'
				}]
            },
			{
				featureType: 'road',
				elementType: 'labels.text.fill',
				stylers: [{
					color: '#30D5C8'
				}]
            },

          ]
	});

	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: '../bouncy/img/beetroot.png',
		animation: google.maps.Animation.DROP

	});
}

//	$(document).ready(function() {
//    $('.fixed').scrollToFixed();
//});