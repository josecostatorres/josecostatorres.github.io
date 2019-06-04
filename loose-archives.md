---
layout: loose-archives
title: Loose Archives
images:
- "/uploads/2019-06/2019-tumblr_o9owczy8wR1t90cl6o1_500-1.png"
- "/uploads/2019-06/2019-tumblr_o7lrmrpWkG1t90cl6o1_500-1.png"
- "/uploads/2019-06/2019-tumblr_n4rbo6dRNr1t90cl6o1_500-1.jpg"
- "/uploads/2019-06/2019-tumblr_n2ibzsiR3C1t90cl6o1_400.gif"
- "/uploads/2019-06/2019-tumblr_n3j6mjJmN11t90cl6o1_500.gif"
- "/uploads/2019-06/2019-tumblr_mcpuyfXyQ71qbwkvko1_500.jpg"
- "/uploads/2019-06/2019-tumblr_my6w1jf2ha1t90cl6o1_400.gif"
- "/uploads/2019-06/2019-tumblr_n30ttbJp9o1t90cl6o1_500.png"
- "/uploads/2019-06/2019-tumblr_n3j0gpg94Q1t90cl6o1_500.png"
- "/uploads/2019-06/2019-tumblr_nb9wbnKdl81t90cl6o1_500.gif"
- "/uploads/2019-06/2019-tumblr_nhizroqkTW1t90cl6o1_400.gif"
- "/uploads/2019-06/2019-tumblr_nnss81Bb0y1t90cl6o1_500.png"
- "/uploads/2019-06/2019-tumblr_npp35sP7Ix1t90cl6o1_500.jpg"
- "/uploads/2019-06/2019-tumblr_npp36f5zLr1t90cl6o1_500.png"
- "/uploads/2019-06/2019-tumblr_npp37ocu8t1t90cl6o1_500.png"
- "/uploads/2019-06/2019-tumblr_npp3b5t38u1t90cl6o1_500.png"
- "/uploads/2019-06/2019-tumblr_npp3d0UNRe1t90cl6o1_500.png"
- "/uploads/2019-06/2019-tumblr_nqgp02CNTf1t90cl6o1_500.png"
- "/uploads/2019-06/2019-8081db58884025.5a0cd097cdb97.png"

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
            console.log(window.innerWidth, randomWidth);
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
            console.log(window.innerWidth, randomWidth);
            images[i].style.top = randomTop + 'px';
        }
    }
    if (window.matchMedia('(max-width:500px)').matches) {
        imageSizeMobile();
    } else {
        imageSizeDesktop();
    }
    var $draggable = $('img').draggabilly({
        containment: 'body'
    })
    
</script>