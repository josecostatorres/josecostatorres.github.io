var $ = jQuery.noConflict();
    $(document).ready(function() {

        $('.scroller li:first-of-type .lazy').Lazy({
				    bind: 'event'
				});

        $('.work h3').on('click', function() {
            if ($(this).parent().hasClass('closed')) {
                $(this).on('mouseleave', function() {
                    $(this).unbind('mouseleave');
                });
                $(this).parent().addClass("work-open");
                // show image and info
                var workall = $(this).parent().find('.work-container');
                var time = 60;
                workall.slideToggle(time, function() {
                    if ($(this).is(':visible'))
                        $(this).css('display', 'flex');
                });
                // close every other list item
                $('.work-container').not(workall).hide(time / 2).delay(30).removeClass("work-open");

                $(this).parent().find('img.lazy').Lazy({
                    effect: "fadeIn",
                    effectTime: 60,
                    threshold: 300,
                    scrollDirection: 'horizontal',
                    appendScroll: $('.work-right')
                });

            } else if (!$(this).parent().hasClass('work-open')) {
                $(this).parent().removeClass("work-open");
            }
        });

        $(".work-right").mousemove(function(e) {
            var pWidth = $(this).innerWidth(); //use .outerWidth() if you want borders
            var pOffset = $(this).offset();
            var x = e.pageX - pOffset.left;
            if (pWidth / 2 > x) {
                $(this).css({'cursor':'url(/uploads/seta-left.png) 50 50, e-resize'});
            } else {
               $(this).css({'cursor':'url(/uploads/seta-right.png) 100 50, e-resize'});
        }
        });

        $(".work-right").click(function(e) {
            var pWidth = $(this).innerWidth(); //use .outerWidth() if you want borders
            var pOffset = $(this).offset();
            var x = e.pageX - pOffset.left;
            if (pWidth / 2 > x) {
                $(this).stop().animate({
                    scrollLeft: '-=500'
                }, 100);
            } else {
                $(this).stop().animate({
                    scrollLeft: '+=500'
                }, 100);
        }
        });

    });
