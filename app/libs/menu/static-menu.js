// JavaScript Document





jQuery(function($){

	// появление/затухание кнопки #back-top

	$(function (){

		// прячем кнопку #back-top

		$("#head");

	

		$(window).scroll(function (){

			if ($(this).scrollTop() > 600){

				console.log("red");

				

			} else{

				$("#head").removeClass('static-menu');

			}

		});



		

	

	});





});







