---
layout: about
title: Cookies
---

{% for work in site.works %}
    <div class="work">
        <h2>{{ work.title }}</h2>
        <p>{{ work.description }}</p>
    </div>
{% endfor %}