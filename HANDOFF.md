# HANDOFF — NexPhone blog

Resume cold from this file + [`docs/content-strategy.md`](docs/content-strategy.md).

## What this is

Git-as-CMS for `nexphone.ai/blog`. Public repo `valtahomes/nexphone-blog`, branch `main`. Howard (`whatshuang1`) has WRITE. Alex publishes by removing `draft: true` (the VPS agent may also publish after a mechanical checklist).

## Live (do not link to anything else from a new post)

- `/blog/introducing-nexphone` (news)
- `/blog/answering-service-for-plumbers`
- `/blog/answering-service-cost`
- `/blog/best-answering-service-for-small-business` (cluster 4 pillar)
- `/blog/ai-receptionist-for-small-business` (cluster 1 pillar)

Plus `nexphone.ai/pricing`, `/features/*`, `nexphone.ai`.

## Cadence (locked 19 Aug 2026)

- Through **30 Sep 2026:** 4 unique BOFU/MOFU guides per week. Mon–Thu new URL. Friday = internal links, no fifth URL.
- From **1 Oct 2026** (or once GSC shows impressions): 2–3/week. Expand a page-2 URL before writing a sibling.
- Never daily. Never a variant URL.

## Next URLs (conversion order)

1. `hvac-answering-service`
2. `ai-receptionist-pricing`
3. `missed-call-text-back`

## Writer / VPS

- **Grok** writes every new guide (`grok-4.6` at `api.x.ai`).
- Orchestrator: `trader@82.180.133.216:~/nexphone-blog-agent/` (own `.env` chmod 600, own clone, own systemd timer). SSH key `~/.ssh/hostinger_trading`.
- Secrets live only on the VPS `.env` (xAI key + GitHub deploy key). Paths, never values, in this file.
- Keyword snapshot stays at `~/nexphone-seo/` on the same box. Do not mix with trading dirs.
- Ops: `sudo systemctl start nexphone-blog.service` · `systemctl list-timers nexphone-blog.timer` · `journalctl -u nexphone-blog.service`

## Pricing truth (check live page; do not restating a stale grid)

nexphone.ai/pricing as of 19 Aug 2026: Pro $20 / Team $40 / Business $80. AI add-on $25/130 min to $199/1,500. Strategy body still says "~$45 team" in §1 — prefer linking `/pricing`.

## Do not re-litigate

- SEO guides are not product pages: keep the comparison neutral, then sell in **Where NexPhone fits**.
- No GFM tables, no 62% stat, no getnextphone.com, no "Valta Voice", no HIPAA claims.
- One keyword, one URL.
