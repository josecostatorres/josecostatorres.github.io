---
layout: loose-archives
title: Loose Archives
---

<ul>
    {% for image in la.images %}
        <li><img src="{{ image | relative_url }}"></li>
    {% endfor %}
</ul>