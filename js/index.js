$(document).ready(function(){
	
	$(".protfolio .protfolio_intro .mobile").mouseover(function(){
		var mobile_img = $(this).find("img").height();
		var plus = $(this).height();
		var mobile_img_size = mobile_img-plus
		$(this).find("img").stop().animate({marginTop: "-"+mobile_img_size}, 15000);
	}).mouseout(function(){
		$(this).find("img").stop().animate({marginTop: 0}, 800);
	});
	$(".protfolio .protfolio_intro .pc").mouseover(function(){
		var pc_img = $(this).find("img").height();
		var plus = $(this).height();
		var pc_img_size = pc_img-plus
		$(this).find("img").stop().animate({marginTop: "-"+pc_img_size}, 15000);
	}).mouseout(function(){
		$(this).find("img").stop().animate({marginTop: 0}, 800);
	});

});