$(document).on('click', '.anchor-link', function(e){
	e.preventDefault();
	thisLink = $(this);
	thisHref = thisLink.attr('href');
	$('html, body').animate({
		scrollTop: $(thisHref).offset().top
	}, 500);
});

// ROTATOR
// www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery 
var slides = document.querySelectorAll('.heroshot .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
