---
layout: loose-archives
title: Loose Archives
images:
- "/uploads/2019-05/CLIX.png"
- "/uploads/2019-05/CLX.png"
- "/uploads/2019-05/CLI.png"
- "/uploads/2019-05/CLV.png"
- "/uploads/2019-05/CLIII.png"
- "/uploads/2019-05/apresentação-digi-1.png"
- "/uploads/2019-05/família.png"
- "/uploads/2019-05/apresentação-digi-5.png"
- "/uploads/2019-05/apresentação-digi-4.png"
- "/uploads/2019-05/apresentação-digi-3.png"
- "/uploads/2019-05/apresentação-digi-2.png"
- "/uploads/2019-05/apresentação-digi-6.png"
---

<section>
    <ul>
        {% for image in page.images %}
        <li>
            <img class="lazy" data-src="https://images.weserv.nl?url=https://josecostatorres.github.io{{ image }}&h=600&q=80" src="https://images.weserv.nl?url=https://josecostatorres.github.io{{ image }}&q=25&output=jpg">
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
    function imageSize() {
        var images = document.getElementsByTagName("img");
        for (i = 0; i < images.length; i++) {
            var min = 400;
            var max = 500;
            var randomWidth = Math.floor(Math.random() * (max - min + 1) + min);
            images[i].style.width = randomWidth + 'px';
            var randomLeft = Math.floor(Math.random() * (window.innerWidth - randomWidth)) + 0;
            images[i].style.left = randomLeft + 'px';
            var randomTop = Math.floor(Math.random() * 2500) + 000;
            console.log(window.innerWidth, randomWidth);
            images[i].style.top = randomTop + 'px';
        }
    }
    imageSize();
    var $draggable = $('img').draggabilly({
        containment: 'body'
    })
    
</script>
