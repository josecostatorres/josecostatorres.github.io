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
            <img class="lazy" src="{{ image | relative_url }}">
        </li>
        {% endfor %}
    </ul>
</section>

<script>
    function imageSize() {
        var images = document.getElementsByTagName("img");
        for (i = 0; i < images.length; i++) {
            var randomHeight = Math.floor(Math.random() * 300) + 200;
            images[i].style.height = randomHeight + 'px';
            var randomLeft = Math.floor(Math.random() * (window.innerWidth - randomHeight)) + 0;
            images[i].style.left = randomLeft + 'px';
            var randomTop = Math.floor(Math.random() * 3000) + 000;
            console.log(i, randomHeight, randomLeft);
            images[i].style.top = randomTop + 'px';
        }
    }
    imageSize();
    var $draggable = $('img').draggabilly({
        containment: 'body'
    })
    var $ = jQuery.noConflict();
    window.onload = function() {
        $('.lazy').Lazy({
            effect: "fadeIn",
            effectTime: 1000
        });
        console.log('teste');
    };
</script>
