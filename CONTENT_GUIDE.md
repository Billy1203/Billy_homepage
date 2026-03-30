# Content Guide

This file is the fastest way to find where to edit content in this site.

## Quick Map

- Home / About page: [`_pages/about.md`](/Users/yiheng/Billy_homepage/_pages/about.md)
- CV page: [`_pages/cv.md`](/Users/yiheng/Billy_homepage/_pages/cv.md)
- Publications landing page: [`_pages/publications.md`](/Users/yiheng/Billy_homepage/_pages/publications.md)
- Projects landing page: [`_pages/projects.md`](/Users/yiheng/Billy_homepage/_pages/projects.md)
- Footprints landing page: [`_pages/footprints.md`](/Users/yiheng/Billy_homepage/_pages/footprints.md)
- Top navigation: [`_data/navigation.yml`](/Users/yiheng/Billy_homepage/_data/navigation.yml)
- Site title, author info, avatar, social links: [`_config.yml`](/Users/yiheng/Billy_homepage/_config.yml)
- Sidebar / author card structure: [`_includes/author-profile.html`](/Users/yiheng/Billy_homepage/_includes/author-profile.html)
- Header navigation structure: [`_includes/masthead.html`](/Users/yiheng/Billy_homepage/_includes/masthead.html)
- Main content page layout: [`_layouts/page-content.html`](/Users/yiheng/Billy_homepage/_layouts/page-content.html)
- Section listing page layout: [`_layouts/section-list.html`](/Users/yiheng/Billy_homepage/_layouts/section-list.html)
- Travel log entry layout: [`_layouts/travel-log-entry.html`](/Users/yiheng/Billy_homepage/_layouts/travel-log-entry.html)
- Main visual styles: [`_sass/_site-visual-theme.scss`](/Users/yiheng/Billy_homepage/_sass/_site-visual-theme.scss)
- Content page styles: [`_sass/_site-layout-content.scss`](/Users/yiheng/Billy_homepage/_sass/_site-layout-content.scss)
- Listing page styles: [`_sass/_site-layout-listing.scss`](/Users/yiheng/Billy_homepage/_sass/_site-layout-listing.scss)
- Sidebar profile styles: [`_sass/_site-sidebar-profile.scss`](/Users/yiheng/Billy_homepage/_sass/_site-sidebar-profile.scss)
- Base typography and upstream layout rules: [`_sass/_base.scss`](/Users/yiheng/Billy_homepage/_sass/_base.scss), [`_sass/_page.scss`](/Users/yiheng/Billy_homepage/_sass/_page.scss), [`_sass/_sidebar.scss`](/Users/yiheng/Billy_homepage/_sass/_sidebar.scss), [`_sass/_archive.scss`](/Users/yiheng/Billy_homepage/_sass/_archive.scss), [`_sass/_theme.scss`](/Users/yiheng/Billy_homepage/_sass/_theme.scss)
- Frontend interactions: [`assets/js/`](/Users/yiheng/Billy_homepage/assets/js)
- Images: [`images/`](/Users/yiheng/Billy_homepage/images)
- PDFs / videos / attachments: [`files/`](/Users/yiheng/Billy_homepage/files)

## Common Tasks

### 1. Update homepage text

Edit [`_pages/about.md`](/Users/yiheng/Billy_homepage/_pages/about.md).

Typical sections there:

- intro text
- highlights
- academic background cards
- research interests
- news list

### 2. Change CV content

Edit [`_pages/cv.md`](/Users/yiheng/Billy_homepage/_pages/cv.md).

This page contains:

- education
- work experience
- skills
- CV publications block

### 3. Add a new publication

Add a new markdown file in [`_publications/`](/Users/yiheng/Billy_homepage/_publications).

Existing files there are your template examples.

### 4. Add a new project

Add a new markdown file in [`_projects/`](/Users/yiheng/Billy_homepage/_projects).

### 5. Add a new footprint / travel note

Add a new markdown file in [`_plogs/`](/Users/yiheng/Billy_homepage/_plogs).

Filename format should stay date-based, like:

```text
2026-03-29-city-name.md
```

### 6. Change menu items

Edit [`_data/navigation.yml`](/Users/yiheng/Billy_homepage/_data/navigation.yml).

### 7. Change avatar, name, location, social links

Edit [`_config.yml`](/Users/yiheng/Billy_homepage/_config.yml).

Look for:

- `title`
- `author.avatar`
- `author.avatar_options`
- `author.name`
- `author.location`
- `author.employer`
- `author.github`
- `author.googlescholar`
- `author.linkedin`

### 8. Replace or add an image

Put the image in [`images/`](/Users/yiheng/Billy_homepage/images).

Then reference it from markdown using:

```md
![Alt text](../images/example.png)
```

### 9. Add a PDF / video / attachment

Put the file in [`files/`](/Users/yiheng/Billy_homepage/files), then link it directly.

### 10. Change styles

Most custom appearance now lives in [`_sass/_theme.scss`](/Users/yiheng/Billy_homepage/_sass/_theme.scss).

Use these files when needed:

- general typography and colors: [`_sass/_theme.scss`](/Users/yiheng/Billy_homepage/_sass/_theme.scss)
- page spacing and content width: [`_sass/_page.scss`](/Users/yiheng/Billy_homepage/_sass/_page.scss)
- sidebar behavior: [`_sass/_sidebar.scss`](/Users/yiheng/Billy_homepage/_sass/_sidebar.scss)

### 11. Change interactions

Use [`assets/js/`](/Users/yiheng/Billy_homepage/assets/js):

- avatar switching: [`assets/js/profile-avatar.js`](/Users/yiheng/Billy_homepage/assets/js/profile-avatar.js)
- font preset / reading density: [`assets/js/font-preview.js`](/Users/yiheng/Billy_homepage/assets/js/font-preview.js)
- mobile navigation layout: [`assets/js/nav-layout.js`](/Users/yiheng/Billy_homepage/assets/js/nav-layout.js)
- theme toggle: [`assets/js/theme-toggle.js`](/Users/yiheng/Billy_homepage/assets/js/theme-toggle.js)

## Editing Rules For Future You

- If you want to change words, start with `_pages`, `_projects`, `_publications`, or `_plogs`.
- If you want to change the page frame, start with `_layouts/page-content.html`, `_layouts/section-list.html`, or `_layouts/travel-log-entry.html`.
- If you want to change reusable UI blocks, start with `_includes`.
- If you want to change global style, start with `_sass/_site-visual-theme.scss`.
- If you want to change site-wide identity, start with `_config.yml`.

## Files You Usually Do Not Need To Touch

- [`_site/`](/Users/yiheng/Billy_homepage/_site): generated output
- [`vendor/`](/Users/yiheng/Billy_homepage/vendor): dependencies
- [`tmp/`](/Users/yiheng/Billy_homepage/tmp): temporary storage
- `.DS_Store` files: ignore them

## Suggested Future Cleanup

- Remove tracked `.DS_Store` files outside `images/` as well.
- Replace the generic upstream README with project-specific maintenance notes.
- Add one reusable template file for new publications / projects / plogs.
