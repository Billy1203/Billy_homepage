# Billy Homepage

## Edit Content Quickly

If you want to update this site later and find the right folder quickly, start here:

- content map: [`CONTENT_GUIDE.md`](/Users/yiheng/Billy_homepage/CONTENT_GUIDE.md)
- homepage text: [`_pages/about.md`](/Users/yiheng/Billy_homepage/_pages/about.md)
- CV: [`_pages/cv.md`](/Users/yiheng/Billy_homepage/_pages/cv.md)
- publications: [`_publications/`](/Users/yiheng/Billy_homepage/_publications)
- projects: [`_projects/`](/Users/yiheng/Billy_homepage/_projects)
- footprints: [`_plogs/`](/Users/yiheng/Billy_homepage/_plogs)
- navigation: [`_data/navigation.yml`](/Users/yiheng/Billy_homepage/_data/navigation.yml)
- author info and avatar: [`_config.yml`](/Users/yiheng/Billy_homepage/_config.yml)
- styles: [`_sass/_theme.scss`](/Users/yiheng/Billy_homepage/_sass/_theme.scss)

---

# Academic Pages

![pages-build-deployment](https://github.com/academicpages/academicpages.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)

Academic Pages is a Github Pages template for academic websites.


# Getting Started

1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Click the "Use this template" button in the top right.
1. On the "New repository" page, enter your repository name as "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and add your content.
1. Upload any files (like PDFs, .zip files, etc.) to the `files/` directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section
1. (Optional) Use the Jupyter notebooks or python scripts in the `_generator` folder to generate  files for publications and talks from a TSV file.

See more info at https://academicpages.github.io/

## Running Locally

When you are initially working your website, it is very useful to be able to preview the changes locally before pushing them to GitHub. To work locally you will need to:

1. Clone the repository and made updates as detailed above.
1. Make sure you have ruby-dev, bundler, and nodejs installed: `sudo apt install ruby-dev ruby-bundler nodejs`
1. Install image conversion tools for auto-webp: `sudo apt install webp imagemagick`
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
1. Run `jekyll serve -l -H localhost` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.

## WebP Auto Conversion (Jekyll Build Stage)

This repo now includes a build hook that will:

- convert local `.png`, `.jpg`, `.jpeg` files to `.webp` during site build
- rewrite generated HTML references to `.webp`
- keep `.gif` and `.mp4` unchanged

Config is in `_config.yml`:

```yml
auto_webp:
  enabled: true
  quality: 82
```

For `github.io` deployment, you must use **GitHub Actions** build (workflow: `.github/workflows/pages.yml`), because default GitHub Pages build does not run custom plugins in `_plugins/`.

If you are running on Linux it may be necessary to install some additional dependencies prior to being able to run locally: `sudo apt install build-essential gcc make`

# Maintenance 

Bug reports and feature requests to the template  should be [submitted via GitHub](https://github.com/academicpages/academicpages.github.io/issues/new/choose). For questions concerning how to style the template, please feel free to start a [new discussion on GitHub](https://github.com/academicpages/academicpages.github.io/discussions).

This repository was forked (then detached) by [Stuart Geiger](https://github.com/staeiou) from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/), which is © 2016 Michael Rose and released under the MIT License (see LICENSE.md). It is currently being maintained by [Robert Zupko](https://github.com/rjzupkoii) and additional maintainers would be welcomed.

## Bugfixes and enhancements

If you have bugfixes and enhancements that you would like to submit as a pull request, you will need to [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) this repository as opposed to using it as a template. This will also allow you to [synchronize your copy](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) of template to your fork as well.

Unfortunately, one logistical issue with a template theme like Academic Pages that makes it a little tricky to get bug fixes and updates to the core theme. If you use this template and customize it, you will probably get merge conflicts if you attempt to synchronize. If you want to save your various .yml configuration files and  files, you can delete the repository and fork it again. Or you can manually patch.
