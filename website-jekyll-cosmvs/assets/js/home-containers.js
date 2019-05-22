var $ = jQuery.noConflict();
    $(document).ready(function() {

        $('.work').stop().on('click', function() {
            if ($(this).hasClass('closed')) {
                var time = 60;
                // close every other list item
                $('.work-container').not(workall).slideUp(time * 2).delay(30);
                
                $(this).stop().on('mouseleave', function() {
                    $(this).unbind('mouseleave');
                });

                // show image and info
                var workall = $(this).find('.work-container');
                workall.slideToggle(time, function() {
                    if ($(this).is(':visible'))
                        $(this).css('display', 'flex');
                });
                $(this).toggleClass("work-open");
            }
        });
    });