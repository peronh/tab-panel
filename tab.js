$(function() {

		$('ul li').on('click', function(){

			$('ul li.active').removeClass('active');
			$(this).addClass('active');

		var panelToShow = $(this).attr('rel');

				$('section div.active').slideUp(200, function() {
					$(this).removeClass('active');

				$('#'+panelToShow).slideDown(200, function() {
					$(this).addClass('active');
			});
		});
	});
});