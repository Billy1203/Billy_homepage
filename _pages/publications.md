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
<section class="index-preface">
  <p class="index-preface__lead">{% include i18n-text.html en="A compact archive of work across embodied sensing, multi-sensor perception, and large-scale visual generation, with the same underlying interest in perception methods that hold up at the system level." zh="这里收录的是一条相对连贯的研究线索：从具身感知、多传感器感知，到大规模视觉生成；变化的是问题场景，不变的是对系统级感知方法的兴趣。" %}</p>
  <div class="index-preface__meta">
    <span class="index-preface__tag">{% include i18n-text.html en="Embodied sensing" zh="具身感知" %}</span>
    <span class="index-preface__tag">{% include i18n-text.html en="Multi-sensor systems" zh="多传感器系统" %}</span>
    <span class="index-preface__tag">{% include i18n-text.html en="Scene synthesis" zh="场景生成" %}</span>
  </div>
</section>

<section id="peer-reviewed" class="index-section">
  <header class="index-section__header">
    <h2>{% include i18n-text.html en="Published & Accepted" zh="已发表与已接收" %}</h2>
    <p>{% include i18n-text.html en="Peer-reviewed papers and accepted work." zh="同行评审论文与已接收成果。" %}</p>
  </header>

  <div class="entries-list">
    {% for post in site.publications reversed %}
      {% if post.venue %}
        {% include archive-single.html type="list" %}
      {% endif %}
    {% endfor %}
  </div>
</section>

<section id="under-review" class="index-section">
  <header class="index-section__header">
    <h2>{% include i18n-text.html en="Under Review" zh="审稿中" %}</h2>
    <p>{% include i18n-text.html en="Ongoing manuscripts that extend the same research trajectory into new application areas." zh="延续同一研究主线、但正推进到新应用场景中的在审稿件。" %}</p>
  </header>

  <div class="entries-list">
    {% for post in site.publications reversed %}
      {% if post.status or post.status_zh %}
        {% include archive-single.html type="list" %}
      {% endif %}
    {% endfor %}
  </div>
</section>
