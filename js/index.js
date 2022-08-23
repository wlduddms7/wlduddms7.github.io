$(document).ready(function(){
	
		$('#fullpage').fullpage({
			responsiveWidth: 1024,
			'onLeave' : function (index, nextIndex, direction){
				/* 탑버튼 섹션1에서 숨기기 */
				if (index == 1 && direction == 'down'){
					$(".top_btn").addClass("go_top");
				}else if (index == 2 && direction == 'up'){
					$(".top_btn").removeClass("go_top");
				}

				/* 푸터에서 네브 조정 */
				if (index == 6 && direction == 'down'){
					$(".top_btn").addClass("ft_on");
				}else if (index == 7 && direction == 'up'){
					$(".top_btn").removeClass("ft_on");
				}
			}

		});
		$('.top_btn').on('click', function(){
			$.fn.fullpage.moveTo(1);
			$(this).removeClass("go_top");
		});
	
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