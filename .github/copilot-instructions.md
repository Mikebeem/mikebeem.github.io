# Copilot Instructions for mikebeem.github.io

## Public-safe scope

- Assume this file may be visible in a public repository.
- Keep instructions professional and client-safe.
- Do not include private business strategy, pricing strategy, personal doubts, confidential information, internal commercial reasoning, private client details, or non-public delivery context.
- Do not invent customer names, testimonials, metrics, case studies, or outcome claims.

## Project overview

- This repository is a bilingual Jekyll website for Beemsterboer IT Consultancy, owned by Mike Beemsterboer.
- The site uses the `jekyll-theme-chirpy` theme with `jekyll-polyglot` for English and Dutch content.
- Ruby gems are managed with Bundler via `Gemfile`. There is no `package.json` and no Node-based build pipeline in this repo.
- Treat `_site/` as generated output. Do not edit generated files there unless the user explicitly asks for it.

## Business positioning and audience

- Keep content aligned with this positioning: Beemsterboer IT Consultancy helps small and medium-sized software companies improve and maintain their DevOps platform, CI/CD pipelines, and developer workflows without needing to hire a full-time Platform Engineer.
- Primary audience: CTOs, technical founders, Heads of Development, engineering managers, lead developers, and software companies with one or more development teams.
- Assume readers often use Azure DevOps, GitHub, or GitLab and need professional DevOps or Platform Engineering support without a full internal platform team.
- Core proposition: DevOps Platform Engineering for software teams that are too large for ad-hoc pipelines, but too small for a full internal platform team.
- Main services to keep consistent across the site:
  - DevOps Platform Scan
  - DevOps Platform Care
  - DevOps Platform Improvement Projects
  - CI/CD pipeline setup and modernization
  - Azure DevOps, GitHub, and GitLab governance
  - YAML pipeline templates
  - Security and quality checks
  - Infrastructure as Code
  - Kubernetes and GitOps onboarding
  - Automation and developer experience improvements

## Tone of voice

- Write in a pragmatic, clear, professional, and direct style.
- Do not sound overly corporate, hype-driven, or exaggerated.
- Keep the writing customer-focused and technically credible.
- Start from customer problems and operational friction, then move to practical outcomes.
- Avoid turning the site into a generic freelancer CV. Keep the focus on platform outcomes for software teams.
- Make pages conversion-oriented but not pushy.
- Prefer concrete CTAs such as `Plan an introduction call` or `Start with a DevOps Platform Scan`.

## Repository structure

- `_tabs/`: top-level site pages such as services, about, archives, and DevOps Platform Care.
- `_posts/`: blog posts, usually maintained in English and Dutch pairs.
- `_pages/`: standalone pages such as resume variants.
- `_data/` and `_data/locales/`: structured data and localization strings.
- `_includes/` and `_layouts/`: Jekyll partials and layouts.
- `assets/css/jekyll-theme-chirpy.scss`: main theme override file.
- `assets/js/theme-logo-toggle.js`: small custom JavaScript override.
- `.github/instructions/website-copy.instructions.md`: extra guidance for Markdown content in posts, tabs, pages, and README.

## Routing and localization

- Localization is handled by `jekyll-polyglot` with `en` as the default language and `nl` as the secondary language.
- English pages typically live at their canonical route, and Dutch localized pages are emitted under `/nl/`.
- Tabs are a Jekyll collection with output enabled and a default permalink pattern of `/:title/`.
- Posts use the default permalink pattern `/posts/:title/`.
- Categories and tags are generated through `jekyll-archives`.
- When editing localized content, keep English and Dutch versions aligned in meaning, structure, metadata, links, and CTAs unless the user explicitly asks for divergence.

## Content editing rules

- Preserve existing front matter patterns such as `title`, `description`, `layout`, `toc`, `order`, `permalink`, `lang`, and `icon` where applicable.
- When updating service or landing-page content, check whether the corresponding Dutch or English version also needs the same change.
- When changing copy, also review metadata, internal links, headings, and CTA text so they stay consistent.
- Prefer small, focused edits over broad rewrites unless a rewrite is requested.
- Use practical outcomes instead of long lists of technical skills.
- Do not include confidential or private information in website content or metadata.
- If editing files matched by `.github/instructions/website-copy.instructions.md`, follow that file as an additional source of truth.

## Styling and implementation conventions

- Preserve the existing Jekyll and Chirpy structure. Do not replace the framework or introduce a frontend build tool without an explicit request.
- Prefer minimal overrides in `assets/css/jekyll-theme-chirpy.scss` instead of large custom styling systems.
- Reuse existing CSS variables, spacing, and card patterns before adding new styles.
- Keep JavaScript changes small and targeted. This repo currently uses only light custom JavaScript.
- Do not introduce unnecessary dependencies or tooling.

## Commands

- Install dependencies: `bundle install`
- Local development server: `bundle exec jekyll serve`
- Build: `bundle exec jekyll build`
- Production-style build used in GitHub Actions: `JEKYLL_ENV=production bundle exec jekyll b -d "_site"`
- Link and HTML check used in CI after build: `bundle exec htmlproofer _site --disable-external=true --ignore-urls "/^http:\/\/127.0.0.1/,/^http:\/\/0.0.0.0/,/^http:\/\/localhost/"`
- There is no dedicated lint script configured in this repository. A `.markdownlint.json` file exists, but no runnable lint command is defined in project scripts or workflow files.

## Working expectations for Copilot

- Preserve the existing framework, routing, styling conventions, layouts, and content structure.
- Prefer small, focused changes that solve the requested problem directly.
- Keep content consistent with the public positioning above.
- Avoid making the website read like a generic freelancer CV.
- Do not introduce unnecessary dependencies.
- Validate relevant changes when possible by running the narrowest applicable command, usually `bundle exec jekyll build` and, when relevant, `bundle exec htmlproofer _site ...`.
- Do not edit `_site/` as the source of truth.
- After each task, summarize changed files and the important decisions made.