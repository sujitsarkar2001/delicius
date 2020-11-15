$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$("section.top-bar").addClass("scrolled-top-bar");
			$("nav.navbar").addClass("scrolled-nav-bar");
		}else{
			$("section.top-bar").removeClass("scrolled-top-bar");
			$("nav.navbar").removeClass("scrolled-nav-bar");
		}
	});

	// Slider Owl Carousel
	$('.carousel-slider').owlCarousel({
		loop:true,
		nav:true,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		items: 1
	});
	// Animation 
	AOS.init({
		duration: 1500
	});
	// Isotope Filtering class add remove
    $("ul.menu-filter li").click(function(){
    	$("ul.menu-filter li").removeClass("active");
    	$(this).addClass("active");
    });
    // Isotope
    var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		columnWidth: '.grid-item'
	  } 
	});
	// filter items on button click
	$('ul.menu-filter li').click(function(){
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	// Tabs
	$(".our-speciality").tabs();
	// Events Owl Carousel
	$('.events-carousel').owlCarousel({
		loop:true,
		nav:true,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		items: 1
	});
	// Testimonial Owl Carousel
	$('.testimonial-item').owlCarousel({
		loop:true,
		nav:true,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		items: 1
	});
	// Magnific Popup
	$(".gallery").each(function(){
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300,
				opener: function(openerElement) {
				  return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}

		});
	});
	// Bact to top
	$(window).scroll(function(){
		if($(this).scrollTop() > 400){
			$(".back-to-top").css({"opacity":"1"});
		}else{
			$(".back-to-top").css({"opacity":"0"});
		}
	});
	$(".back-to-top").click(function(){
		$("html,body").animate({scrollTop:0},1000);
	});
	//
	var returns = false;
	$(".mobile-nav-toggler i.fa").click(function(){
		if(returns == false){
			$(".mobile-nav-toggler i.fa").removeClass("fa-bars");
			$(this).addClass("fa-times");
			returns = true;
		}else{
			$(".mobile-nav-toggler i.fa").removeClass("fa-times");
			$(this).addClass("fa-bars");
			returns = false;
		}
	});
	//
	var button = false;
	$(".mobile-nav-toggler i.fa").click(function(){
		if(button == false){
			$("nav.mobile-navbar").css({"display":"block"});
			$(".mobile-nav-overlay").css({"display":"block"});
			button = true;
		}else{
			$("nav.mobile-navbar").css({"display":"none"});
			$(".mobile-nav-overlay").css({"display":"none"});
			button = false;
		}
	});
	//
	$("nav ul li a").click(function(){
		$("nav ul li a").removeClass("active");
		$(this).addClass("active");
		$("nav.mobile-navbar").css({"display":"none"});
		$(".mobile-nav-overlay").css({"display":"none"});
		$(".mobile-nav-toggler i.fa").removeClass("fa-times");
		$(".mobile-nav-toggler i.fa").addClass("fa-bars");
	});
	//
	$("nav ul li a,.slider .btn-carousel").smoothScroll({
		speed: 1000
	});
})