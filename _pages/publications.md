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

{% for post in site.publications reversed %} 
  {% include archive-single.html type="list" %}
{% endfor %}
