$(document).ready(function(){
	  $('.bxslider').bxSlider({
	  	auto: true,
	  	controls: true,
	  	pager: false
	  }); //slider
	  $( '.plan-button' ).hover(
			function() {
			    $(this).parent().parent().find(".plan-header").css("background-color", "#49cbcd");
			}, 
			function(){
				$(this).parent().parent().find(".plan-header").css("background-color", "#485460");
			}
		)

	}); //buy now

 