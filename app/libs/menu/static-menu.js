// JavaScript Document


jQuery(function($){
	// появление/затухание кнопки #back-top
	$(function (){
		// прячем кнопку #back-top
		$("#menu-top");
	
		$(window).scroll(function (){
			if ($(this).scrollTop() > 600){
				$("#menu-top").addClass('static-menu animated fadeInDown');
				$(".alert-callback").css("display","block");
				
			} else{
				$("#menu-top").removeClass('static-menu animated fadeInDown');
				$(".alert-callback").css("display","none");
			}
		});

		
	
	});


});



