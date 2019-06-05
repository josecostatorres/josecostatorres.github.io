---
layout: loose-archives
title: Loose Archives
images:
- "/uploads/2019-06/tumblr_o0ylaz2hi31t90cl6o1_1280.png"
- "/uploads/2019-06/tumblr_oa6dqdZY8S1t90cl6o1_1280-1.png"
- "/uploads/2019-06/2019-tumblr_o9owczy8wR1t90cl6o1_500-1.png"
- "/uploads/2019-06/2019-tumblr_o7lrmrpWkG1t90cl6o1_500-1.png"
- "/uploads/2019-06/2019-tumblr_n4rbo6dRNr1t90cl6o1_500-1.jpg"
- "/uploads/2019-06/2019-tumblr_n3j6mjJmN11t90cl6o1_500.gif"
- "/uploads/2019-06/2019-tumblr_n3j0gpg94Q1t90cl6o1_500.png"
- "/uploads/2019-06/2019-tumblr_nhizroqkTW1t90cl6o1_400.gif"
- "/uploads/2019-06/2019-tumblr_nnss81Bb0y1t90cl6o1_500.png"
- "/uploads/2019-06/2019-tumblr_npp3b5t38u1t90cl6o1_500.png"
- "/uploads/2019-06/2019-tumblr_npp3d0UNRe1t90cl6o1_500.png"
- "/uploads/2019-06/2019-tumblr_nqgp02CNTf1t90cl6o1_500.png"
- "/uploads/2019-06/2019-8081db58884025.5a0cd097cdb97.png"

---
<section>
    <ul>
        {% for image in page.images %}
        <li>
            <img class="lazy" data-src="https://images.weserv.nl?url=https://josecostatorres.github.io{{ image }}&h=600&q=80" src="https://images.weserv.nl?url=https://josecostatorres.github.io{{ image }}&q=25&output=jpg" alt="Random image of something I made.">
        </li>
        {% endfor %}
        <script>
            $(function() {
                $('.lazy').Lazy({
                    effect: "fadeIn",
                    effectTime: 50,
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
            var min = 300;
            var max = 400;
            var randomWidth = Math.floor(Math.random() * (max - min + 1) + min);
            images[i].style.width = randomWidth + 'px';
            var randomLeft = Math.floor(Math.random() * (window.innerWidth - randomWidth)) + 0;
            images[i].style.left = randomLeft + 'px';
            var randomTop = Math.floor(Math.random() * (2500 - 1 + 1) + 1);
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
            var randomTop = Math.floor(Math.random() * (2500 - 1 + 1) + 1);
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
        $("img").on('click mousedown', function () {
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