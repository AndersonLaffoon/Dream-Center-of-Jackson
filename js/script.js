$(function () {
    $("button.navbar-toggler").on("click", function () {
        $("nav").toggleClass("toggler-bg");
      });
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".logo-zoom img").css({
		transform: 'translate3d(-0%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/0.08)/100+')',
	});
});