$(document).on('click', '.anchor-link', function(e){
	e.preventDefault();
	thisLink = $(this);
	thisHref = thisLink.attr('href');
	$('html, body').animate({
		scrollTop: $(thisHref).offset().top
	}, 500);
});