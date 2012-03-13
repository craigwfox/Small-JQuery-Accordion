(function() {
	$('.tab').filter(':nth-child(n+3)').addClass('hide');
	$('#accord').on('click', 'h1', function() {
		$(this)
			.next()
				.slideDown()
				.siblings('.tab')
					.slideUp(200);
	});
})();