;
(function ($) {

	$(window).on('load', function () {

		var $grid = $('.portfolio-gallery__grid').isotope({
			itemSelector: '.portfolio-gallery__grid-item',
			layoutMode: 'masonry',
			masonry: {
				gutter: 30
			}
		});

		$('.portfolio-gallery__nav').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});

		$('.portfolio-gallery__nav').each(function (i, buttonGroup) {
			var $buttonGroup = $(buttonGroup);
			$buttonGroup.on('click', 'button', function () {
				$buttonGroup.find('.is-checked').removeClass('is-checked');
				$(this).addClass('is-checked');
			});
		});

		$('.portfolio-gallery__grid').isotope({
			itemSelector: '.portfolio-gallery__grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-sizer',
				gutter: '.gutter-sizer'
			}
		});

	});
})(jQuery);