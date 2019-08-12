$('.menu-btn').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('menu-btn__active');
	$('.menu-nav').toggleClass('menu-nav__active');
})