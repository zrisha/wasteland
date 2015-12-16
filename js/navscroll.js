$(function() {
    // Stick the #nav to the top of the window
    var navscroll = $('.navscroll');
    var navscrollHomeY = navscroll.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navscrollHomeY;
        if (shouldBeFixed && !isFixed) {
            navscroll.css({
                position: 'fixed',
                top: 50,
                left: navscroll.offset().left,
                width: navscroll.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            navscroll.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});