
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".").css({
      transform: 'translate3d(0, +'+(scroll/100)+'%, 0) scale('+(110- scroll/120)/80+')'
    });
  });