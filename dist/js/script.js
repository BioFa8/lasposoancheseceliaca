(function($){
	"use strict"; // Start of use strict

	$(document).ready(function() {
		"use strict";

		/*RSVP Form*/
		$(".submit_block_1").click(function() {
			send_form('block_1');
			return false;
		});

		function send_form(type){
	
			var name = $("input#name_"+type).val();
			if (name == "") {
				$("input#name_"+type).css({border:"1px solid red"});
				$("input#name_"+type).focus();
				return false;
			}
			var email = $("input#email_"+type).val();
			if (email == "") {
				$("input#email_"+type).css({border:"1px solid red"});
				$("input#email_"+type).focus();
				return false;
			}
			
			var surname = $("input#surname_"+type).val();
			if (surname == "") {
				$("input#surname_"+type).css({border:"1px solid red"});
				$("input#surname_"+type).focus();
				return false;
			}
			
			var attending = $("input#attending_"+type).val();
			if (attending == "") {
				$("input#attending_"+type).css({border:"1px solid red"});
				$("input#attending_"+type).focus();
				return false;
			}
			
			$.post( "/checkinvitato", { name: name, surname: surname })
			  .done(function( data ) {
//			   console.log(data);
			   var isInvitatoValid = (data=="true");
//				console.log(surname +" "+ name+ " isInvitatoValid?"+isInvitatoValid);
//				if (!isInvitatoValid) {
//					$("input#surname_"+type).css({border:"1px solid red"});
//					$("input#name_"+type).css({border:"1px solid red"});
//					$("input#name_"+type).focus();
//					return false;
//				} 
				var dataString = '&name=' + name + '&surname=' + surname + '&attending=' + attending + '&email=' + email + "&invitato_valido=" + isInvitatoValid;
				var form = $(this);
				sendMail(form, dataString, type);
				
			  });	
			
			//return false;
	
			
		}
		
		function sendMail(form, dataString, type) {
			
			var str = form.serialize();
			$.ajax({
				method: "POST",
				url: "http://formspree.io/info@lasposoancheseceliaca.com",
				data: dataString,
				dataType: "json",
				success: function() {
					$('#div_'+type).html("<div id='form_send_message'>Grazie per averci risposto, ti ricontatteremo il più presto possibile.</div>", 1500);
				}
			});
		}

		/*ScrollR */
		if ($(window).width() > 1280) {
		var s = skrollr.init({
			forceHeight: false
		});
		}

		/*Gallery ColorBox */
		$('.gallery_txt a').colorbox({
			rel:'gal',
			maxWidth:"100%",
		});

		/*Main Menu Button */
		$('.main_menu_btn').on("click", function(e){
			$(this).toggleClass('main_menu_btn_open');
			$('.main_menu_block').toggleClass('main_menu_block_open').fadeToggle();
			$('.main_menu_block').find('.menu_wrapper').toggleClass('active');
			$('header .anim').toggleClass('active');
			e.preventDefault();
		});

		/* Section Background */
		$('section, .parallax').each(function(){
			var image = $(this).attr('data-image');
			if (image){
				$(this).css('background-image', 'url('+image+')');
			}
		});

		/*ColorBox*/
		if ($(window).width() >= 760) {
			$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
		}else{
			$(".youtube").colorbox({iframe:true, innerWidth:320, innerHeight:240});
		}
		$(window).resize(function () {
			if ($(window).width() >= 760) {
				$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
			}else{
				$(".youtube").colorbox({iframe:true, innerWidth:320, innerHeight:240});
			}
		 });

		/*Scroll Effect*/
		$('.intro_down, .go').on("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		/*Show/Hide Photo in When&Where Block*/
		$('.photocamera span').on("click", function(e){
			$(this).parents('section').find('.opacity').toggleClass('fade');
			$(this).parents('section').find('.over').fadeToggle();
			e.preventDefault();
		});

		/*Player*/
		$('.music').on("click", function(e){
			$('.player').fadeToggle();
			e.preventDefault();
		});

		/*OWL Carousel in Our Story*/
		$(".story_wrapper").owlCarousel({
			loop:true, navigation : false,	responsive: true, responsiveRefreshRate : 200,	slideSpeed : 200,
	 		paginationSpeed : 200,	rewindSpeed : 500,	items:2,  itemsTablet: [1024,1], autoPlay : false,
			itemsMobile : [479,1], 	itemsDesktopSmall : [980,1],  itemsDesktop : [1500,2], mouseDrag:false, touchDrag:false
		});
		

		/*Gallery Carousel */
		$(".gallery_wrapper").owlCarousel({
	 		navigation : true,	responsive: true, responsiveRefreshRate : 200,	slideSpeed : 200,
	 		paginationSpeed : 200,	rewindSpeed : 500,	items:3,  itemsTablet: [768,2], autoPlay : true,
			itemsMobile : [479,1], mouseDrag:false, touchDrag:false
		});

		/*Registry Carousel */
		$(".registry_wrapper").owlCarousel({
	 		navigation : true, responsive: true, responsiveRefreshRate : 200, slideSpeed : 200, paginationSpeed : 200,
			rewindSpeed : 500,	stopOnHover : true, autoHeight : true, items:3, mouseDrag:false, autoPlay : true, touchDrag:false
		});

		/*The Crew Carousel*/
		$(".guest_wrapper").owlCarousel({
	 		navigation : true, responsive: true, responsiveRefreshRate : 200, slideSpeed : 200,	paginationSpeed : 200,
			rewindSpeed : 500, stopOnHover : false, autoHeight : true, items:6, mouseDrag:false, autoPlay : true, transitionStyle : "fade", touchDrag:false
		});

		/*Slider Carousel*/
		$(".slider").owlCarousel({
	 		navigation : true, responsive: true, responsiveRefreshRate : 200, slideSpeed : 200,	paginationSpeed : 200,
			rewindSpeed : 500, stopOnHover : false, autoHeight : true, singleItem:true, mouseDrag:false, autoPlay : true, transitionStyle : "fade", touchDrag:false
		});

		/*Blog Inside*/
		$(".blog_inside_wrapper").owlCarousel({
	 		navigation : true, responsive: true, responsiveRefreshRate : 200, slideSpeed : 200,	paginationSpeed : 200,
			rewindSpeed : 500, stopOnHover : false, autoHeight : true, singleItem:true, mouseDrag:false, autoPlay : true, transitionStyle : "fade", touchDrag:false
		});

		/* Top Menu Click to Section */
		$('.sub_menu').find('a').on("click", function(e){
			$('.sub_menu').find('a').removeClass('active');
			$(this).addClass('active');
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top +1
			}, 1000);

			e.preventDefault();
			
			$('.main_menu_btn').click();
		});


		/*FireFly in Intro*/
		$.firefly({
			color: '#fff', minPixel: 1, maxPixel: 3, total : 55, on: '.into_firefly'
		});

		/* Refresh ScrollR */
		s.refresh($(".guest_wrapper, .our_story"));

	});
})(jQuery);
