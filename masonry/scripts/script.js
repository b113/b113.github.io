
 
  $(document).ready(function () {
$('.grid').masonry({
	// options
	itemSelector: '.grid-item',
	//  columnWidth: 200
	gutter: 30
});


$('.slider-big').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-small'
});




$('.slider-small').on('init', function () {

	$('.slick-center').children().css("display", "block");

});

$('.slider-small').on('afterChange', function () {
	$('.slick-center').siblings().children().css("display", "none");
	$('.slick-center').children().css("display", "block");

});

$('.slider-small').slick({
	slidesToShow: 7,
	slidesToScroll: 1,
	arrows: false,
	centerMode: true,
	focusOnSelect: true,
	asNavFor: '.slider-big',
	infinite: true


});

   });