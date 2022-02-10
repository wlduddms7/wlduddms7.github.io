$(document).ready(function(){
	/*헤더 over*/
	var depth2 = $("header .gnb > li > ul");
	var depth2_img = $("header .gnb > li > .img");
	var gnb_btn_hide = $(".gnb_menu").css("display");
	var slide_second = 300;
	if(gnb_btn_hide === 'none'){
		$("header > div").mouseover(function(){
			$(depth2).stop().slideDown(slide_second);
			$(depth2_img).stop().slideDown(slide_second);
			$(".dim").stop().slideDown(slide_second);
		}).mouseout(function(){
			$(depth2).stop().slideUp(slide_second);
			$(depth2_img).stop().slideUp(slide_second);
			$(".dim").stop().slideUp(slide_second);
		});
	}else{
		$("header .gnb > li > h2 > a").click(function(e){
			e.preventDefault();
			$(this).parents("li").siblings().children("h2").removeClass("active");
			$(this).parent().toggleClass("active");
			$(this).parent().siblings("ul").slideToggle(slide_second);
			$(this).parents("li").siblings().children("ul").slideUp(slide_second)
		});
	}

	/*모바일 메뉴*/
	$(".gnb_menu").click(function(){
		$("header").toggleClass("on");
		$("nav").toggleClass("on");
		$("body").toggleClass("on");
	});

	/*모바일 탑버튼*/
	$(".m_top_btn").click(function(){
		$("html, body").animate({"scrollTop":0},800);
	});

	/*푸터 관련기간*/
	$(".slide_ft .title").click(function(){
		$(".slide_ft").toggleClass("open");
		$(".slide_ft .cont").slideToggle();
	});

});