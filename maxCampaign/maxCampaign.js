if (Meteor.isClient) {
	window.onload = function () { 
		$("#topSection").append('<span id="photoCaption"> Click photo to Vote! </span>'); 
	}
	$(document).ready(function(){
	$(".button").on("click", function(){
		if ($(this).attr("id") == "contactMe"){
			$('#aboutMeContent').css({'display': 'none'});
			$('#endorsementContent').css({'display': 'none'});
			$('#contactMeContent').css({'display' : 'block'});
		}
		if ($(this).attr("id") == "aboutMe"){
			$('#endorsementContent').css({'display': 'none'});
			$('#contactMeContent').css({'display' : 'none'});
			$('#aboutMeContent').css({'display': 'block'});
		}
		if ($(this).attr("id") == "endorsements"){
			$('#aboutMeContent').css({'display': 'none'});
			$('#contactMeContent').css({'display' : 'none'});
			$('#endorsementContent').css({'display': 'block'});
			var container = document.querySelector('#endorsementContent');
			var msnry = new Masonry( container, {
 			 // options...
 				itemSelector: '.endorse',
  				columnWidth: 200
			});
		}
		$('html, body').animate({
		    scrollTop: $("#topSection").height() + $("#toobar").height()
		});
		return false;
	});
	$("#coverPhoto").on("click", function(){
		window.open("https://ssmu.simplyvoting.com", "_blank");
		$(this).css({'opacity' : '1'});
	});
	$("#contentBox").css({
		"height" : $(window).height()-50,
	});
	$("#photoCaption").css({
		"left" : $("#coverPhoto").offset().left+25,
		"top" : $("#coverPhoto").height() - 50,
	});
	$("#linkFB").on("click", function(){
		window.open("https://www.facebook.com/Max.a.millionaire", "_blank");
	});
	$(window).scroll(function (event) {
	    var y = $(this).scrollTop();
	    if (y >= $("#topSection").height()){
	      $('#toolbar').addClass('fixed');
	      $('#contentBox').addClass('fixed');
	    } 
	    else{
	      $('#toolbar').removeClass('fixed');
	      $('#contentBox').removeClass('fixed');
	    }
	  });
	});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
