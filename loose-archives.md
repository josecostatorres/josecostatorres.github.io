---
layout: loose-archives
title: Loose Archives
images:
- "/uploads/2019-06/FLYER-PRO-REGULAR.png"
- "/uploads/2019-06/RRRRRR.png"
- "/uploads/2019-06/open-call-YELLOW.png"
- "/uploads/2019-06/HB-19.png"
- "/uploads/2019-06/ABRIL-INSTA.png"
- "/uploads/2019-06/cineclube70-geral.png"
- "/uploads/2019-06/Boletim-infoMAIO-19-DIGITAL.png"
- "/uploads/2019-06/Boletim-infoABRIL-19.png"
- "/uploads/2019-06/Boletim-infoMARÇO-19.png"
- "/uploads/2019-06/flor-invert.png"
- "/uploads/2019-06/Boletim-infoFEVEREIRO-19-ROSA.png"
- "/uploads/2019-06/Boletim-infoNOVEMBRO-18.png"
- "/uploads/2019-06/Boletim-infoJUNHO-18.png"
- "/uploads/2019-06/Boletim-infoMAIO-18-WHITE.png"
- "/uploads/2019-06/bit-to-basics.png"
- "/uploads/2019-06/PROG-REGULAR-TRY-2.png"
- "/uploads/2019-06/tumblr_o0ylaz2hi31t90cl6o1_1280.png"
- "/uploads/2019-06/2019-tumblr_o7lrmrpWkG1t90cl6o1_500-1.png"
- "/uploads/2019-06/2019-tumblr_n3j0gpg94Q1t90cl6o1_500.png"

---
<section>
    <ul>
        {% for image in page.images %}
        <li>
            <img class="lazy" data-src="https://images.weserv.nl?url=https://josecostatorres.github.io{{ image }}&h=400&q=80" src="https://images.weserv.nl?url=https://josecostatorres.github.io{{ image }}&h=2&w=2&q=10&output=jpg" alt="Random image of something I made.">
        </li>
        {% endfor %}
        <script>
            $(function() {
                $('.lazy').Lazy({
                    effect: "fadeIn",
                    effectTime: 500,
                    threshold: 200,
                    scrollDirection: "vertical"
                });
            });

        </script>
    </ul>
</section>

<script>
    function imageSizeDesktop() {
        var images = document.getElementsByTagName("img");
        for (i = 0; i < images.length; i++) {
            var min = 200;
            var max = 300;
            var randomWidth = Math.floor(Math.random() * (max - min + 1) + min);
            images[i].style.width = randomWidth + 'px';
            var randomLeft = Math.floor(Math.random() * (window.innerWidth - randomWidth)) + 0;
            images[i].style.left = randomLeft + 'px';
            var randomTop = Math.floor(Math.random() * (5000 - 1 + 1) + 1);
            images[i].style.top = randomTop + 'px';
        }
    }

    function imageSizeMobile() {
        var images = document.getElementsByTagName("img");
        for (i = 0; i < images.length; i++) {
            var min = 100;
            var max = 200;
            var randomWidth = Math.floor(Math.random() * (max - min + 1) + min);
            images[i].style.width = randomWidth + 'px';
            var randomLeft = Math.floor(Math.random() * (window.innerWidth - randomWidth)) + 0;
            images[i].style.left = randomLeft + 'px';
            var randomTop = Math.floor(Math.random() * (5000 - 1 + 1) + 1);
            images[i].style.top = randomTop + 'px';
        }
    }
    if (window.matchMedia('(max-width:500px)').matches) {
        imageSizeMobile();
    } else {
        imageSizeDesktop();
    }

    var $ = jQuery.noConflict();
    $(document).ready(function() {
        var $draggable = $('img').draggabilly({
            containment: 'body'
        })
        $("img").on('click mousedown', function() {
            var curr_index = $(this).css("z-index") + 1;
            $(this).css({
                'z-index': curr_index
            });
            $("img").not(this).css({
                'z-index': 0
            });
        })
    })


</script>