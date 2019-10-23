---
layout: about
title: About
bio: Independent graphic and art direction bureau based in Lisboa-P.T. run by José
  Torres. <br>Each work is custom made to fit its own purpose. <br>Focused on detailed
  typographic work for comercial and cultural spheres. Including posters, publications,
  sites, exhibitions and identities.<br>Would love to hear from you.<br>
lectures:
- year: 2019
  title: THE DESIGN KIDS-INTERVIEW
  link: https://thedesignkids.org/interviews/jose-torres
- title: Conversas Lisboa
  year: 2017
  link: https://www.facebook.com/conversaslisboa/photos/gm.130234881084610/1358338434295870/?type=3&theater
- title: ESAD World Graphics Day
  year: 2016
  link: https://www.esad.pt/pt/news/esad-world-graphics-day-2016
image: "/uploads/2019-10/info2.0.png"

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
    <p><a href="mailto:josecostatorres@gmail.com">hello@cosmvs.com</a><br><a href="https://wa.me/351911070975" target="_blank" rel="noreferrer">00351 911 070 975</a></p>
    </article>
    <article>
        <img class="lazy" data-src="https://images.weserv.nl?url=https://josecostatorres.github.io{{ page.image }}&h=600&q=80&output=jpg">
    </article>
</section>

<script>
    $(function() {
        $('.lazy').Lazy({
            effect: "fadeIn",
            effectTime: 1000
        });
    });
</script>