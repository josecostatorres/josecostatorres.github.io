---
#
# By default, content added below the "---" mark will appear in the home page
# between the top bar and the list of recent posts.
# To change the home page layout, edit the _layouts/home.html file.
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
layout: home
---

{% for work in site.works %}
<article class="work closed" style="background-color: {{ work.cor_principal }}">
    <h3>{{ work.title }}</h3>
    <div class="work-container">
        <div class="work-left">
            <h4>{{ work.ano }}</h4>
            <h4>{{ work.category }}</h4>
            <p>{{ work.description }}</p>
            <a>{{ work.link }}</a>
        </div>
        <div class="work-right" style="background-color: {{ work.cor_secundaria }}">
            <ul>
                {% for image in page.images %}
                <li><img src="{{ image.image_path }}" alt="{{ image.title}}" /></li>
                {% endfor %}
            </ul>
        </div>
    </div>
</article>
{% endfor %}


<script>
    var $ = jQuery.noConflict();
    $(document).ready(function() {
        $('.work').stop().on('click', function() {

            if ($(this).hasClass('closed')) {
                $(this).stop().on('mouseleave', function () {
                    $(this).unbind('mouseleave');
                });
                $(this).toggleClass("work-open");
                // show image and info
                var workall = $(this).find('.work-container');
                var time = 60;
                workall.slideToggle(time, function() {
                    if ($(this).is(':visible'))
                        $(this).css('display', 'flex');
                });
                
                // close every other list item
                $('.work-container').not(workall).slideUp(time / 2).delay(30);
            }
        });
    });
</script>
