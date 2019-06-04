---
layout: loose-archives
title: Loose Archives
images:
- "/uploads/large/2019-tumblr_o9owczy8wR1t90cl6o1_500.png"
- "/uploads/large/2019-tumblr_o7lrmrpWkG1t90cl6o1_500.png"

---
<section>
    <ul>
        {% for image in page.images %}
        <li>
            <img class="lazy" data-src="https://images.weserv.nl?url=https://josecostatorres.github.io{{ image }}&q=80" src="https://images.weserv.nl?url=https://josecostatorres.github.io{{ image }}&q=30&output=jpg">
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
    function imageSize() {
        var images = document.getElementsByTagName("img");
        for (i = 0; i < images.length; i++) {
            var randomHeight = Math.floor(Math.random() * 300) + 200;
            images[i].style.height = randomHeight + 'px';
            var randomLeft = Math.floor(Math.random() * (window.innerWidth - randomHeight)) + 0;
            images[i].style.left = randomLeft + 'px';
            var randomTop = Math.floor(Math.random() * 2500) + 000;
            images[i].style.top = randomTop + 'px';
        }
    }
    imageSize();
    var $draggable = $('img').draggabilly({
        containment: 'body'
    })
    
</script>