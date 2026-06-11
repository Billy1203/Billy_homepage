---
layout: section-list
title: "Projects"
title_zh: "项目"
permalink: /projects/
author_profile: true
entries_layout: list
show_page_title: false
watermark_label: "Projects"
watermark_label_zh: "项目"
---
<section class="index-preface">
  <p class="index-preface__lead">{% include i18n-text.html en="These project pages record selected systems, demos, and documents from dissertation, capstone, and applied engineering work." zh="这些项目页记录学位论文、综合设计与应用工程中的部分系统、演示和文档。" %}</p>
  <div class="index-preface__meta">
    <span class="index-preface__tag">{% include i18n-text.html en="Dissertation work" zh="学位论文项目" %}</span>
    <span class="index-preface__tag">{% include i18n-text.html en="System demos" zh="系统演示" %}</span>
    <span class="index-preface__tag">{% include i18n-text.html en="Technical documents" zh="技术文档" %}</span>
  </div>
</section>

<section id="project-archive" class="index-section">
  <header class="index-section__header">
    <h2>{% include i18n-text.html en="Selected Work" zh="代表项目" %}</h2>
    <p>{% include i18n-text.html en="Dissertation and capstone projects." zh="收录代表性的学位论文与综合设计项目。" %}</p>
  </header>

  <div class="entries-list">
    {% for post in site.projects reversed %}
      {% include archive-single.html %}
    {% endfor %}
  </div>
</section>
