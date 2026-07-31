# NexPhone Blog — architecture

## The decision: git is the CMS

Content lives in this repo as markdown. The NexPhone site (the Next.js app on Railway) renders it at
`nexphone.ai/blog` by fetching this repo through the GitHub API at request time, cached with ISR
(revalidate ≈ 300s). **Publishing is `git push` — no site deploy, live within ~5 minutes.**

```
nexphone-blog (this repo, public)         nexphone site (Railway)
  posts/*.md      ← writing/AI/PRs          /blog          index (featured + cards + category pills)
  images/<slug>/* ← small, versioned        /blog/[slug]   article (multimedia + FAQ + JSON-LD)
  R2 bucket       ← big media               /blog/rss.xml  feed
        └────────────── push ──────────────→  GitHub API fetch + ISR(300s)
```

### Why not Strapi (now)

A self-hosted Strapi means another Railway service + its own Postgres + media storage + admin accounts +
upgrades + backups — for a 1–2 person team whose content is largely AI-drafted. Content in a database is
also invisible to git: no diff, no PR review, no one-command rollback. Git-based gives all of that for
$0, and lets the AI assistant draft/edit/publish directly — which is how content actually gets produced
here today.

### The upgrade path (deliberate, single-file switch)

The site reads content through exactly one module: `src/lib/blog/source.ts` in the nexphone repo. Every
page renders from its types. Swapping the backing store later touches only that file:

1. **Now** — git + GitHub web editor (non-technical folks edit in the browser; commit = publish).
2. **When a non-technical editor joins** — add [Keystatic](https://keystatic.com) (git-backed browser
   admin, free, zero servers; writes to this same repo — `source.ts` unchanged).
3. **When the team needs roles/workflows/media library** — Strapi or Payload; `source.ts` re-points to
   its API. Pages never know.

### Fetch mechanics

- Repo is **public** — the site lists `posts/` via the GitHub contents API and pulls raw file bodies.
- ISR `revalidate: 300`: each page re-fetches at most every 5 minutes; a failed fetch keeps serving the
  last good render (acceptable for a content site).
- Unauthenticated GitHub API allows 60 req/h/IP — plenty behind ISR. `GITHUB_CONTENT_TOKEN` on Railway
  is an optional headroom knob; the code sends it only when present.

## Media strategy (two tiers)

| Tier | Where | Why | How |
|---|---|---|---|
| Small images ≤ ~300 KB | `images/<slug>/` in this repo | Versioned WITH the post, reviewable in PRs, drag-drop in the GitHub editor | Relative path in markdown; the site rewrites it to the raw URL |
| Big images / GIF / video / audio | Cloudflare R2 (the existing NexPhone bucket, `blog/<slug>/…` prefix) | Zero egress fees, CDN, keeps the repo lean | `node scripts/upload-media.mjs <file> <slug>` prints the public URL to paste |

The R2 bucket already serves public URLs for the product (compliance card uploads), so the blog reuses
it under the `blog/` prefix — no new bucket, no new credentials. Credentials come from the nexphone
Railway service (`railway variables -s nexphone --kv | grep R2_`).

## Rendering (in the nexphone repo)

- `src/lib/blog/source.ts` — list + fetch + frontmatter/FAQ parsing + relative-image rewriting. The only
  data entry point.
- `src/components/marketing/BlogArticle.tsx` — markdown renderer built for articles: images with alt-text
  captions (`|wide` for full-bleed), a YouTube URL alone on a line becomes an embedded player, an `.mp4`
  URL a native video player, `.mp3`/`.m4a` an audio player, and the frontmatter `faq:` list renders as a
  Q&A section plus `FAQPage` JSON-LD for search rich results.
- Index page: featured latest post + card grid + News/Product/Guides pills. Article page: 65ch measure,
  serif headings (the marketing design system), "More posts", and a restrained signup CTA.
- SEO: per-post `generateMetadata` (og:image = cover), `Article` JSON-LD, RSS at `/blog/rss.xml`.

## Editorial conventions

- One post = one file; the filename is the URL slug, permanent once published (renames break links).
- `draft: true` hides from index/RSS but keeps the direct URL fetchable for preview.
- Categories are a closed set (`news` / `product` / `guides`) — the index pills and the URL filter
  depend on them; adding a category is a small site change, on purpose.
