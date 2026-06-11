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
  <p class="index-preface__lead">{% include i18n-text.html en="A compact archive of work across embodied sensing, multi-sensor perception, and large-scale visual generation, organized around perception methods evaluated at the system level." zh="这里收录具身感知、多传感器感知和大规模视觉生成相关工作，重点放在经过系统级验证的感知方法。" %}</p>
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
    <p>{% include i18n-text.html en="Ongoing manuscripts in related application areas." zh="相关应用方向中的在审稿件。" %}</p>
  </header>

  <div class="entries-list">
    {% for post in site.publications reversed %}
      {% if post.status or post.status_zh %}
        {% include archive-single.html type="list" %}
      {% endif %}
    {% endfor %}
  </div>
</section>
