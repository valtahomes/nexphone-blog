# HANDOFF — NexPhone blog

Resume cold from this file + [`docs/content-strategy.md`](docs/content-strategy.md).

## What this is

Git-as-CMS for `nexphone.ai/blog`. Public repo `valtahomes/nexphone-blog`, branch `main`. Howard (`whatshuang1`) has WRITE. Alex publishes by removing `draft: true` (the VPS agent may also publish after a mechanical checklist).

## Live (do not link to anything else from a new post)

Every file in `posts/` without `draft: true` is live: 17 as of 15 Sep 2026 (16 guides + `introducing-nexphone`). The agent builds its link list from `posts/`, so this file no longer lists them.

Plus `nexphone.ai/pricing`, `/features/*`, `nexphone.ai`.

## Categories (locked 19 Aug 2026)

Closed set: `news` | `product` | `guides`. SEO posts are `guides`. Anything else **404s
the post**. Topic clusters live in internal links, not in frontmatter. Extra-category
experiment abandoned same day.

## Cadence (locked 19 Aug 2026)

- Through **30 Sep 2026:** 4 unique BOFU/MOFU guides per week. Mon–Thu new URL. Friday = internal links, no fifth URL.
- From **1 Oct 2026** (or once GSC shows impressions): 2–3/week. Expand a page-2 URL before writing a sibling.
- Never daily. Never a variant URL.
- The cap switches itself: `MAX_WEEK = 4` through `SPRINT_END` (30 Sep), then `STEADY_WEEK = 3` in `run.py`.

## Next URLs (conversion order)

The first 13 URLs in `QUEUE` were all live by Thu 10 Sep. Mon 14 and Tue 15 Sep published nothing ("queue empty"), and the alert still said "Grok published". Refilled 15 Sep from the §4 leftovers that passed a live DataForSEO SERP check (blog-format results, no overlap with a live page):

1. `quo-alternatives` (Wed 16 Sep, 10:30 America/New_York)
2. `dialpad-alternative`
3. `business-phone-number-for-llc` (MOFU)
4. `google-voice-alternative` (MOFU)
5. `rosie-ai-receptionist`
6. `grasshopper-alternative` (Thu 24 Sep)

**The queue empties again after Thu 24 Sep.** Mon 28 Sep will text "NOTHING published". Anything past §4 needs fresh DataForSEO research first (§9).

Cut on 15 Sep, so do not re-queue without new data:
- `best ai receptionist for small business`: same SERP as the live `ai-receptionist-for-small-business` pillar, and KD is now 34. Expand the pillar instead.
- `hire a receptionist`: the SERP is all job boards.
- `answering service for dental office`, `pest control answering service`, `insurance answering service`: mostly vendor service pages (dental would also invite HIPAA claims).
- `smith.ai reviews`: review platforms and job seekers.
- `answerconnect pricing`: AnswerConnect hides prices behind a quote form, so Grok would have to guess.
- `answering service for hvac company` (31 Aug): would cannibalise `hvac-answering-service`.

`after-hours-answering-service` stays live (Howard, 15 Sep: "if it serves SEO, keep it"), even though the 31 Aug gate had flagged that SERP as mostly vendor service pages.

## Writer / VPS

- **Grok** writes every new guide (`grok-4.6` at `api.x.ai`). Covers are **real Pexels photographs**, never generated. One photo, one URL — never reuse a shot or another frame from the same shoot (25 Aug: pricing + virtual receptionist both got the Kampus gourmet-shop owner). Do not publish a guide without `cover: images/<slug>/cover.webp` (or `.jpg`). `COVER_IDS` in `run.py` hits `images.pexels.com` directly (search HTML is Cloudflare-blocked).
- Orchestrator: `trader@82.180.133.216:~/nexphone-blog-agent/` (own `.env` chmod 600, own clone, own systemd timer). SSH key `~/.ssh/hostinger_trading`.
- Secrets live only on the VPS `.env` (xAI key + GitHub deploy key). Paths, never values, in this file.
- Keyword snapshot stays at `~/nexphone-seo/` on the same box. Do not mix with trading dirs.
- Each assignment can carry `urls` (vendor pages fetched on top of `PRICE_URLS`) and a `note` passed to Grok verbatim, for example Dialpad's pricing page rendering no prices.
- **Related guides:** on every publish, `refresh_related()` rewrites a single `Related guides:` line on each guide: up to 3 links, nearest same-cluster posts plus the hubs (`CLUSTER` in `run.py`). It replaced a relinker that appended a new sentence to every post on every publish, 11 deep on the oldest posts by 15 Sep. The first publish after 15 Sep removes those stacks.
- **Alerts:** a publish goes to the daily brief. "NOTHING published" (empty queue, missing assignment) and FAILED text right away via `~/notify.py --sms`.
- Ops: `sudo systemctl start nexphone-blog.service` · `systemctl list-timers nexphone-blog.timer` · `journalctl -u nexphone-blog.service`

## Pricing truth (check live page; do not restating a stale grid)

nexphone.ai/pricing as of 19 Aug 2026: Pro $20 / Team $40 / Business $80. AI add-on $25/130 min to $199/1,500. Strategy body still says "~$45 team" in §1 — prefer linking `/pricing`. Re-checked 15 Sep: unchanged. **The pricing page is the source of truth (Howard, 15 Sep).** The three posts that said "$45 for a team" were corrected to $40 that day.

## Do not re-litigate

- SEO guides are not product pages: keep the comparison neutral, then sell in **Where NexPhone fits**.
- **NexPhone puts the job on the owner's calendar automatically** (Howard, 15 Sep 2026). Every post that said it can't book was corrected that day. Still true: no payments/deposits, no Jobber/Housecall Pro/ServiceTitan.
- No GFM tables, no 62% stat, no getnextphone.com, no "Valta Voice", no HIPAA claims.
- One keyword, one URL.
