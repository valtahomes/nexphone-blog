# AGENTS.md — nexphone-blog

This repo **is** the CMS. `posts/<slug>.md` → `nexphone.ai/blog/<slug>` within ~5 minutes of a push to `main`.

**Read first:** [`docs/content-strategy.md`](docs/content-strategy.md) (canonical). [`HANDOFF.md`](HANDOFF.md) for how to resume cold.

## Session-end

At the end of any substantive session — and when asked to update everything — propagate state to git (explicit paths, never `git add -A`), Howard's Brain, `~/Desktop/Claude/KNOWLEDGE/`, and this `HANDOFF.md`. Cadence, CTA rules, and the live-URL list live in the strategy doc, not in chat.

## Hard rules

- Do not invent NexPhone features. No calendar booking, no payments, no Jobber/Housecall Pro/ServiceTitan, texting is not instant.
- NexPhone never appears inside a neutral vendor ranking. BOFU sells after it, under **Where NexPhone fits**.
- No GFM tables in post bodies. No 62% missed-call statistic. Never cite getnextphone.com. Never write "Valta Voice".
- Filename is the permanent URL. `draft: true` hides from index/RSS; delete that line to publish.
- Every SEO post has `cover: images/<slug>/cover.webp` (≤300KB). Real Pexels photograph, never AI-generated. Do not publish without it.
- Category is `news` | `product` | `guides`. SEO posts are `guides`. Do not invent slugs — the site 404s them.
- Clusters (AI receptionist, cost, trades, etc.) live in internal links, not in frontmatter.
- Every draft runs a deslop pass against `docs/anti-slop.md` before publish. The VPS writer does this as a second Grok call.
- Launch cadence through 30 Sep 2026: 4 BOFU/MOFU guides/week, Mon–Thu; Friday = links only.

## Writer

Grok (`grok-4.6`) on the VPS, `trader@82.180.133.216:~/nexphone-blog-agent/`. Isolated from trading. Do not put API keys in this repo.
