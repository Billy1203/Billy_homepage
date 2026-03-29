---
layout: section-list
title: "Footprints on the Road"
title_zh: "旅途足迹"
permalink: /plogs/
author_profile: true
show_page_title: false
watermark_label: "Footprints"
watermark_label_zh: "足迹"
---

<div class="plogs-legend" aria-label="Plog categories" data-i18n-aria-label-en="Plog categories" data-i18n-aria-label-zh="足迹分类">
  <span class="plogs-legend__tag plogs-legend__tag--trip">{% include i18n-text.html en="Trip ✈️" zh="旅行 ✈️" %}</span>
  <span class="plogs-legend__tag plogs-legend__tag--relocation">{% include i18n-text.html en="Relocation 🏠" zh="驻留 🏠" %}</span>
  <span class="plogs-legend__tag plogs-legend__tag--move">{% include i18n-text.html en="Move 🏠" zh="搬迁 🏠" %}</span>
  <span class="plogs-legend__tag plogs-legend__tag--journey">{% include i18n-text.html en="Journey ☀️" zh="途中 ☀️" %}</span>
</div>

{% for post in site.plogs reversed %}
  {% include archive-single-plogs.html type="list" %}
{% endfor %}
