---
layout: about
title: About
bio: Independent graphic and art direction bureau based in Lisboa-P.T. run by José Torres. <br>Each work is custom made to fit its own purpose. <br>Focused on detailed typographic work for comercial and cultural spheres. <br>Would love to hear from you.
lectures:
- title: Conversas Lisboa
  year: 2017
- title: ESAD World Graphics Day
  year: 2016
image: "/uploads/2019-05/CLIII.png"

---
<section id="leftside">
    <article id="bio">
        <h1 class="hidden">About</h1>
        {{ page.bio }}
    </article>
    <article id="lectures">
        <h3>Lectures</h3>
        <ul>
            {% for lecture in page.lectures %}
            <li>
                <p><span class="year">{{ lecture.year }}</span>
                    <a href="{{ lecture.link }}" target="_blank">{{ lecture.title }}</a>
                </p>
            </li>
            {% endfor %}
        </ul>
    </article>
</section>
<section id="rightside">
    <article>
    <h3 class="hidden">Contact</h3>
    <p>For job enquiries or just for a quick drink:</p>
    <p><a href="mailto:josecostatorres@gmail.com">josecostatorres@gmail.com</a><br><a href="https://wa.me/351911070975" target="_blank" rel="noreferrer">00351 911 070 975</a></p>
    </article>
    <article>
        <img class="lazy" data-src="{{ page.image | relative_url }}">
    </article>
</section>

<script>
    $(function() {
        $('.lazy').Lazy({
            effect: "fadeIn",
            effectTime: 500
        });
    });
</script>