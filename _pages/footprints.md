---
layout: section-list
title: "Footprints"
title_zh: "杂文"
permalink: /plogs/
author_profile: true
show_page_title: false
watermark_label: "Footprints"
watermark_label_zh: "杂文"
---

<div class="plogs-legend" aria-label="Plog categories" data-i18n-aria-label-en="Plog categories" data-i18n-aria-label-zh="足迹分类" data-plog-filters>
  <button type="button" class="plogs-legend__tag plogs-legend__tag--trip" data-plog-filter="trip" aria-pressed="false" aria-controls="plogs-feed">
    {% include i18n-text.html en="Trip ✈️" zh="旅行 ✈️" %}
  </button>
  <button type="button" class="plogs-legend__tag plogs-legend__tag--essay" data-plog-filter="essay" aria-pressed="false" aria-controls="plogs-feed">
    {% include i18n-text.html en="Essay ✍️" zh="随笔 ✍️" %}
  </button>
  <button type="button" class="plogs-legend__tag plogs-legend__tag--relocation" data-plog-filter="relocation" aria-pressed="false" aria-controls="plogs-feed">
    {% include i18n-text.html en="Relocation 🏠" zh="驻留 🏠" %}
  </button>
  <button type="button" class="plogs-legend__tag plogs-legend__tag--journey" data-plog-filter="journey" aria-pressed="false" aria-controls="plogs-feed">
    {% include i18n-text.html en="Journey ☀️" zh="途中 ☀️" %}
  </button>
</div>

<div class="plogs-feed" id="plogs-feed" data-plogs-feed>
  {% for post in site.plogs reversed %}
    {% include archive-single-plogs.html type="list" %}
  {% endfor %}
</div>

<p class="plogs-filter-empty" data-plogs-empty hidden aria-live="polite">
  {% include i18n-text.html en="No footprints match the selected filters." zh="当前筛选下暂无足迹记录。" %}
</p>
