<<<<<<< HEAD
   $(document).ready(function () {


   	$().fancybox({
   		selector: '[data-fancybox="images"]',
   		thumbs: false,
   		hash: false,
   	});

   	$('.works-slider__btn-gallery').click(function (e) {
   		e.preventDefault();
   		$('.works-slider__item-img:eq(0)').click();
   	});​

   	$('.works-slider').slick({
   		dots: true,
   		arrows: true,
   		responsive: [
   			{
   				breakpoint: 1024,
   				settings: {
   					arrows: false
   				}
    },
   			{
   				breakpoint: 600,
   				settings: {
   					arrows: false
   				}
    },
   			{
   				breakpoint: 480,
   				settings: {
   					arrows: false
   				}
    }
  ]
   	});

   	$('.team-slider').slick({
   		infinite: true,
   		slidesToShow: 3,
   		slidesToScroll: 1,
   		dots: false,
   		arrows: true,
   		responsive: [
   			{
   				breakpoint: 1024,
   				settings: {
   					arrows: false,
   					dots: false,
   					slidesToShow: 2,
   					slidesToScroll: 1
   				}
    },
   			{
   				breakpoint: 600,
   				settings: {
   					arrows: false,
   					dots: true,
   					slidesToShow: 2,
   					slidesToScroll: 1,
   				}
    },
   			{
   				breakpoint: 480,
   				settings: {
   					arrows: false,
   					dots: true,
   					slidesToShow: 1,
   					slidesToScroll: 1,
   				}
    }
  ]
   	});

$(function () {
    var rightVal = -257; 
    $(".address__logo").click(function () {
        rightVal = (rightVal * -1) - 257; // calculate new value
        $(this).parent().animate({right: rightVal + 'px'}, {queue: false, duration: 500});
    });
});

$(function () {
    var rightVal = -257; 
    $(".address__logo-second").click(function () {
        rightVal = (rightVal * -1) - 257; // calculate new value
        $(this).parent().animate({right: rightVal + 'px'}, {queue: false, duration: 500});
    });
});


$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);
});

   });



   function initMap() {
   	var uluru = {
   		lat: 46.48687341,
   		lng: 30.7325913
   	};

   	var icon = {
   		lat: 46.4899,
   		lng: 30.74
   	}
   	var map = new google.maps.Map(document.getElementById('map'), {
   		center: uluru,
   		zoom: 15,
   		disableDefaultUI: true,
   		zoomControl: false,
   		scaleControl: false,
   		scrollwheel: false
   	});

   	var marker = new google.maps.Marker({
   		position: icon,
   		map: map,
   		icon: 'img/pin.png',
   		animation: google.maps.Animation.DROP

   	});
	   
	   google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center); 
});
	   
   }

=======
console.log("The way your dad looked at it, this watch was your birthright. He'd be damned if any slopes gonna put their greasy yellow hands on his boy's birthright, so he hid it, in the one place he knew he could hide something: his ass. Five long years, he wore this watch up his ass. Then when he died of dysentery, he gave me the watch. I hid this uncomfortable piece of metal up my ass for two years. Then, after seven years, I was sent home to my family. And now, little man, I give the watch to you.");
>>>>>>> origin/master
