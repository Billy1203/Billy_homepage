---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
entries_layout: list
show_page_title: false
watermark_label: "Projects"
---

{% include base_path %}

{% for post in site.projects reversed %}
  {% include archive-single.html %}
{% endfor %}
