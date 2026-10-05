# HANDOFF — NexPhone blog

Resume cold from this file + [`docs/content-strategy.md`](docs/content-strategy.md).

## What this is

Git-as-CMS for `nexphone.ai/blog`. Public repo `valtahomes/nexphone-blog`, branch `main`. Howard (`whatshuang1`) has WRITE. Alex publishes by removing `draft: true` (the blog agent on Howard's Mac may also publish after a mechanical checklist).

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

The first 13 URLs in `QUEUE` were all live by Thu 10 Sep. Mon 14 and Tue 15 Sep published nothing ("queue empty"), and the alert still said "Grok published". On 15 Sep the queue was refilled to **16 URLs**. Each one passed a live DataForSEO SERP check (blog-format results, no overlap with a live or queued page), ordered by the §4 formula:

1. `google-voice-for-business` (+ "google voice pricing", ~11,000/mo): Wed 16 Sep
2. `how-to-get-a-business-phone-number` (+ "free business phone number" + LLC, ~7,700/mo; replaced the queued `business-phone-number-for-llc`, same SERP): Thu 17 Sep
3. `ringcentral-pricing` · 4. `10dlc-registration` · 5. `quo-alternatives` · 6. `nextiva-alternative` (to Thu 24 Sep)
7. `quo-pricing` · 8. `smith-ai-pricing` · 9. `dialpad-alternative` (28–30 Sep)
10. `nextiva-pricing` · 11. `google-voice-alternative` · 12. `rosie-ai-receptionist` (5–7 Oct)
13. `grasshopper-vs-google-voice` · 14. `ringcentral-alternative` · 15. `grasshopper-alternative` (12–14 Oct)
16. `voicemail-greeting-for-business` (Mon 19 Oct)

**Runway ends about 19 Oct, and then the agent stops on purpose.** NexPhone is on hold since 4 Oct (Howard, 5 Oct: let the blog stop when its queue ends), so there are no low-queue texts and no refill. It writes `.queue-finished`, sends one quiet brief note, then does nothing. If NexPhone restarts, refill the same way: DataForSEO data, SERP gate, `ASSIGNMENT` + `CLUSTER` + two eyeballed Pexels IDs per slug. Once Search Console is connected, expanding page-2 posts (§8a) beats adding siblings.

Cut on 15 Sep, so do not re-queue without new data:
- `best ai receptionist for small business`: same SERP as the live `ai-receptionist-for-small-business` pillar, and KD is now 34. Expand the pillar instead.
- `hire a receptionist`: the SERP is all job boards.
- `answering service for dental office`, `pest control answering service`, `insurance answering service`, `real estate answering service`, `law firm answering service`, `medical answering service`: mostly vendor service pages (medical and dental also invite HIPAA claims).
- `smith.ai reviews`: review platforms and job seekers.
- `answerconnect pricing`: prices are behind a quote form, so Grok would have to guess.
- `ai appointment scheduling`: the SERP is meeting-calendar apps (Calendly, Motion), a different product.
- `appointment reminder texts`: reminder software, and reminders are not a confirmed NexPhone feature.
- `business text messaging`, `business texting app`, `vanity phone number`: KD over 30.
- `answering service for hvac company` (31 Aug): would cannibalise `hvac-answering-service`.

## Writer (Howard's Mac since 5 Oct 2026)

- **Claude Sonnet** writes every new guide: `claude -p --model sonnet` on Howard's own Claude subscription, never the API (Howard, 5 Oct 2026: "reroute that to... Sonnet"). Until then Grok (`grok-4.6`, `api.x.ai`) wrote them on the trading VPS, billed to Howard's personal xAI key. Covers are **real Pexels photographs**, never generated. One photo, one URL — never reuse a shot or another frame from the same shoot (25 Aug: pricing + virtual receptionist both got the Kampus gourmet-shop owner). Do not publish a guide without `cover: images/<slug>/cover.webp` (or `.jpg`). `COVER_IDS` in `run.py` hits `images.pexels.com` directly (search HTML is Cloudflare-blocked).
- Orchestrator: `~/Code/nexphone-blog-agent/` on Howard's Mac (`run.py` + its own clone), launchd `com.valta.nexphone-blog` Mon–Thu 09:30 CT (= 10:30 ET), launcher `~/bin/nexphone-blog.sh`, log `~/Library/Logs/nexphone-blog.log`. Full ops, dry run and undo: that folder's `README.md`. The old VPS copy (`trader@82.180.133.216:~/nexphone-blog-agent/`) is parked: its `run.py` exits at once while `MOVED-TO-MAC` exists.
- No API keys. Claude uses the Mac's `claude` login; git pushes with the Mac's gh login (`whatshuang1`, write). Paths, never values, in this file.
- Keyword snapshot stays at `~/nexphone-seo/` on the VPS. Do not mix with trading dirs.
- Each assignment can carry `urls` (vendor pages fetched on top of `PRICE_URLS`) and a `note` passed to the writer verbatim, for example Dialpad's pricing page rendering no prices.
- **Related guides:** on every publish, `refresh_related()` rewrites a single `Related guides:` line on each guide: up to 3 links, nearest same-cluster posts plus the hubs (`CLUSTER` in `run.py`). It replaced a relinker that appended a new sentence to every post on every publish, 11 deep on the oldest posts by 15 Sep. The first publish after 15 Sep removes those stacks.
- **Alerts** (the Mac's `~/Desktop/Claude/scripts/notify.py`, tag NexPhone): a publish goes to the daily brief. "NOTHING published" (missing assignment) and FAILED text right away. A Claude usage limit skips the day with a brief note; the post goes out on the next run.
- Ops: dry run `~/bin/nexphone-blog.sh --dry-run DIR` (writes into a scratch clone, sends nothing) · run now, publishes: `launchctl kickstart gui/$(id -u)/com.valta.nexphone-blog` · pause: `launchctl bootout gui/$(id -u)/com.valta.nexphone-blog`

## Pricing truth (check live page; do not restating a stale grid)

nexphone.ai/pricing as of 19 Aug 2026: Pro $20 / Team $40 / Business $80. AI add-on $25/130 min to $199/1,500. Strategy body still says "~$45 team" in §1 — prefer linking `/pricing`. Re-checked 15 Sep: unchanged. **The pricing page is the source of truth (Howard, 15 Sep).** The three posts that said "$45 for a team" were corrected to $40 that day.

## Do not re-litigate

- SEO guides are not product pages: keep the comparison neutral, then sell in **Where NexPhone fits**.
- **NexPhone puts the job on the owner's calendar automatically** (Howard, 15 Sep 2026). Every post that said it can't book was corrected that day. Still true: no payments/deposits, no Jobber/Housecall Pro/ServiceTitan.
- No GFM tables, no 62% stat, no getnextphone.com, no "Valta Voice", no HIPAA claims.
- One keyword, one URL.
