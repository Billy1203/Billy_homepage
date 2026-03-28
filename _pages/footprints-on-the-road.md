---
layout: section-list
title: "Footprints on the Road 👣"
permalink: /plogs/
author_profile: true
show_page_title: false
watermark_label: "Footprints"
---

<div class="plogs-legend" aria-label="Plog categories">
  <span class="plogs-legend__tag plogs-legend__tag--trip">Trip ✈️</span>
  <span class="plogs-legend__tag plogs-legend__tag--relocation">Relocation 🏠</span>
  <span class="plogs-legend__tag plogs-legend__tag--move">Move 🏠</span>
  <span class="plogs-legend__tag plogs-legend__tag--journey">Journey ☀️</span>
</div>

{% for post in site.plogs reversed %}
  {% include archive-single-plogs.html type="list" %}
{% endfor %}
