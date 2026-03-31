# Content Guide

This file is the shortest path to the content you are likely to edit.

## Edit Map

- Home / About: `_pages/about.md`
- CV: `_pages/cv.md`
- Publications index: `_pages/publications.md`
- Projects index: `_pages/projects.md`
- Footprints index: `_pages/footprints.md`
- Publication entries: `_publications/`
- Project entries: `_projects/`
- Footprints / essays: `_plogs/`
- Top navigation: `_data/navigation.yml`
- Site identity, avatar list, social links: `_config.yml`
- Main page layout: `_layouts/page-content.html`
- Footprints entry layout: `_layouts/travel-log-entry.html`
- Shared content embeds: `_includes/content-media.html`, `_includes/content-figure.html`
- Main styles: `_sass/_theme.scss`
- Frontend interactions: `assets/js/`

## What You Usually Need

### Add a publication

Create a file in `_publications/`:

```md
---
title: "Paper Title"
title_zh: "论文标题"
permalink: /publication/2026-01-01-paper
excerpt: "One-sentence summary."
excerpt_zh: "一句中文简介。"
date: 2026-01-01
venue: "Journal / Conference"
venue_zh: "期刊 / 会议"
paperurl: "https://..."
citation: "Author, A. ..."
---
```

Optional media:

```liquid
{% include content-figure.html src="../files/example-figure.jpg" alt="Example figure" caption_en="<strong>Figure.</strong> English caption." caption_zh="<strong>图示。</strong> 中文说明。" %}

{% include content-media.html kind="video" src="../files/example-video.mp4" frame_class="publication-embed" kind_class="publication-embed--video" kicker_en="Demo video." kicker_zh="演示视频。" %}

{% include content-media.html kind="pdf" src="../files/example-paper.pdf" frame_class="publication-embed" kind_class="publication-embed--pdf" title_en="Paper PDF preview" title_zh="论文 PDF 预览" open_href="../files/example-paper.pdf" open_label_en="Open PDF" open_label_zh="打开 PDF" secondary_href="https://drive.google.com/..." secondary_label_en="Google Drive" secondary_label_zh="Google Drive" %}
```

If the paper is not public yet, this is enough:

```md
---
title: "Paper Title"
title_zh: "论文标题"
permalink: /publication/2026-01-01-paper
excerpt: "This paper is under review."
excerpt_zh: "该论文正在审稿中。"
date: 2026-01-01
status: "Under review"
status_zh: "审稿中"
---
```

### Add a project

Create a file in `_projects/`:

```md
---
title: "Project Title"
title_zh: "项目标题"
permalink: /projects/2026-project-name
type: "Project Type"
type_zh: "项目类型"
venue: "Institution"
venue_zh: "机构"
date: 2026-01-01
location: "City, Country"
location_zh: "城市，国家"
excerpt: "One-sentence summary."
excerpt_zh: "一句中文简介。"
---
```

Optional embeds:

```liquid
{% include content-media.html kind="video" src="../files/project-demo.mp4" %}
{% include content-media.html kind="pdf" src="../files/project-slides.pdf" title_en="Project PDF preview" title_zh="项目 PDF 预览" open_href="../files/project-slides.pdf" open_label_en="Open PDF" open_label_zh="打开 PDF" %}
```

### Add a footprint / essay

Create a file in `_plogs/` with a date-based filename:

```text
2026-03-29-city-name.md
```

Minimal footprint:

```md
---
title: "Bangkok"
title_zh: "曼谷"
type: "Trip ✈️"
type_zh: "旅行 ✈️"
venue: "Dragon Boat Festival"
venue_zh: "端午假期"
location: "Bangkok, Thailand"
location_zh: "泰国曼谷"
excerpt_zh: "端午期间一次短暂的曼谷出走。"
---

<span class="plog-note plog-note--trip">A short Bangkok getaway during the Dragon Boat Festival.</span>
```

## Simplified Rules

- Do not add `collection:` in files under `_projects/` or `_publications/`; Jekyll already knows the collection from the folder.
- Put PDFs, videos, and figures in `files/`, then use the shared include instead of writing raw `<iframe>` / `<video>` blocks each time.
- Keep long citations and external links on the detail page, not the listing page.
- Use `excerpt` / `excerpt_zh` for one-line summaries only.
- Use `status` / `status_zh` for placeholder publication pages that are still under review.

## Files You Usually Should Not Touch

- `_site/`: generated output
- `vendor/`: Ruby dependencies
- `tmp/`: storage for old upstream examples and temporary files
- `node_modules/`: local tooling dependencies
