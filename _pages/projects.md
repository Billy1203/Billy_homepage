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
  <p class="index-preface__lead">{% include i18n-text.html en="These project pages show how research ideas became systems, demos, documents, and the kind of engineering habits that later carried into product work." zh="这些项目页更像是一些工作切片，记录研究问题如何逐渐落到系统、演示、文档，以及后来延续到产品实践中的工程习惯。" %}</p>
  <div class="index-preface__meta">
    <span class="index-preface__tag">{% include i18n-text.html en="Dissertation work" zh="学位论文项目" %}</span>
    <span class="index-preface__tag">{% include i18n-text.html en="System demos" zh="系统演示" %}</span>
    <span class="index-preface__tag">{% include i18n-text.html en="Technical storytelling" zh="技术表达" %}</span>
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
