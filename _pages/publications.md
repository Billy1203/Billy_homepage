---
layout: section-list
title: "Publications"
permalink: /publications/
author_profile: true
entries_layout: list
show_page_title: false
watermark_label: "Publications"
---

[//]: # ({% if site.author.googlescholar %})

[//]: # (  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>)

[//]: # ({% endif %})

{% include base_path %}

{% for post in site.publications reversed %} 
  {% include archive-single.html type="list" %}
{% endfor %}
