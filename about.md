---
layout: about
title: About
---

<main id="about">
    <section id="leftside">
        <article id="bio">
            <h3 class="hidden">About</h3>
            {{ page.bio }}
        </article>
        <article id="lectures">
            <h3>Lectures</h3>
            <div>
                <p><span class="year">2016</span>
                    <a href="esad.pt" target="_blank">ESAD World Graphics Day</a>
                </p>
            </div>
            <div>
                <p><span class="year">2017</span>
                    <a href="esad.pt" target="_blank">Conversas Lisboa</a>
                </p>
            </div>
        </article>
    </section>
    <section id="rightside">
        <article>
        <h3 class="hidden">Contact</h3>
        <p>For job enquiries or just for a quick drink:</p>
        <p><a href="mailto:josecostatorres@gmail.com">josecostatorres@gmail.com</a><br><a href="https://wa.me/351911070975" target="_blank">00351 911 070 975</a></p>
        </article>
        <article>
            <img src="{{ page.image | relative_url }}">
        </article>
    </section>

</main>
