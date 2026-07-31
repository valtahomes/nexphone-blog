# nexphone-blog

Content source for the NexPhone blog at **nexphone.ai/blog**. This repo IS the CMS: every markdown file
in `posts/` is a published article, git history is the editorial record, and a push to `main` is the
publish button — the site picks changes up within ~5 minutes, no deploy needed.

## Publish a post (any of these)

1. **Ask the AI assistant** — "write a post about X"; it drafts, you review, it pushes. Live in ≤5 min.
2. **GitHub web editor** — create/edit a file under `posts/` right in the browser, commit to `main`.
   Drag-and-drop screenshots into `images/<slug>/` the same way.
3. **Any editor + git** — clone, write, push.

Review workflow: open a PR instead of committing to `main` — merge publishes, revert unpublishes.
Set `draft: true` to keep a post off the index and RSS while sharing its direct URL for preview.

## Structure

```
posts/<slug>.md       one file per article — the filename (minus .md) is the URL: /blog/<slug>
images/<slug>/…       small images (screenshots, diagrams; keep each ≤ ~300 KB) — versioned with the post
scripts/              upload-media.mjs — pushes big media to R2, prints the URL to paste
docs/architecture.md  how the whole system works and how it scales up
```

## Frontmatter contract

```yaml
---
title: Toll-free vs. local numbers for business texting   # required
date: 2026-07-31                                          # required, YYYY-MM-DD — sorts the index
category: guides                                          # required: news | product | guides
excerpt: One sentence shown on the card and in search results.   # required
author: NexPhone Team                                     # optional, defaults to "NexPhone Team"
cover: images/<slug>/cover.png                            # optional — card + og:image; relative or full URL
draft: true                                               # optional — hide from index/RSS, direct URL still works
faq:                                                      # optional — renders a Q&A section + FAQ rich results
  - q: Short question?
    a: Short answer.
---
```

Categories mean: **news** = company/product announcements · **product** = features & release notes ·
**guides** = how-tos, education, help content.

## Media rules

- **Small images (≤ ~300 KB)** → commit into `images/<slug>/`, reference by relative path:
  `![Caption text](images/<slug>/screen.png)` — the site rewrites the path; the alt text renders as the caption.
- **Wide/full-bleed image** → append `|wide` to the alt: `![Caption|wide](…)`.
- **Big images, GIFs, video, audio** → upload to R2, paste the printed URL:
  ```bash
  # creds: railway variables -s nexphone --kv | grep R2_   (then export them)
  node scripts/upload-media.mjs ./demo.mp4 <slug>
  ```
- **Video**: a YouTube link alone on its own line embeds a player; an `.mp4` URL alone on a line becomes a
  native player. **Audio**: an `.mp3`/`.m4a` URL alone on a line becomes an audio player.

## Writing bar

Posts are read by small-business owners, not developers. Plain language, short paragraphs, one idea per
section, honest numbers. Every guide should answer a question someone actually typed into a search box.
