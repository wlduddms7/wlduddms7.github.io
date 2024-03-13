// 포폴 리스트
if($("#list_trigger").length > 0){
	$(function () { // wait for document ready
		var controller = new ScrollMagic.Controller();
		var horizontalSlide = new TimelineMax()

		.to("#listContainer", 1,   {x: "-1%"}) 
		.to("#listContainer", 1,   {x: "-20%"}) 
		.to("#listContainer", 1,   {x: "-40%"})
		.to("#listContainer", 1,   {x: "-60%"})
		.to("#listContainer", 1,   {x: "-80%"})

		new ScrollMagic.Scene({
			triggerElement: "#list_trigger",
			triggerHook: "onLeave",
			duration: "400%"
		})
			.setPin("#list_trigger")
			.setTween(horizontalSlide)
			.addTo(controller);
	});



	// 컨텍트 화살표
	function pathPrepare ($el) {
		const lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

	const $word = $("path#word");
	const $dot = $("path#dot");

	pathPrepare($word);
	pathPrepare($dot);

	const controller = new ScrollMagic.Controller();

	const tween = new TimelineMax()
	.add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
	.add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
	.add(TweenMax.to("path", 1, {stroke: "#000", ease:Linear.easeNone}), 0);			// change color during the whole thing

	const scene = new ScrollMagic.Scene({triggerElement: ".scroll_top", duration: 300, tweenChanges: true})
				.setTween(tween)
				.addTo(controller);

	//다크모드
	document.getElementById('mode_btn').addEventListener("click", function() {
	if(document.querySelector('body').classList.contains('dark-mode')){
		document.body.classList.remove("dark-mode");
	}else{
		document.body.classList.add("dark-mode");
	}
	},false);

	if(document.querySelector('body').dataset.theme == 'dark'){
		document.body.classList.add("dark-mode");
	}

}