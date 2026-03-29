---
layout: section-list
title: "Publications"
title_zh: "论文"
permalink: /publications/
author_profile: true
entries_layout: list
show_page_title: false
watermark_label: "Publications"
watermark_label_zh: "论文"
---

[//]: # ({% if site.author.googlescholar %})

[//]: # (  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>)

[//]: # ({% endif %})

{% include base_path %}

{% for post in site.publications reversed %} 
  {% include archive-single.html type="list" %}
{% endfor %}
