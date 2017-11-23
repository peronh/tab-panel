$(function() {

		$('ul li').on('click', function(){

			$('ul li.active').removeClass('active');
			$(this).addClass('active');

		var panelToShow = $(this).attr('rel');

				$('section div.active').slideUp(300, function() {
					$(this).removeClass('active');

				$('#'+panelToShow).slideDown(300, function() {
					$(this).addClass('active');
			});
		});
	});
});