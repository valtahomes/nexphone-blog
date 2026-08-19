# NexPhone Blog — Content Strategy

**This is the only document you need to write for this blog.** Everything required to pick the next
article, target the right keyword, and write it so it converts is on this page. No external tools, no
keyword research, no API calls. The keyword data below is a live snapshot — use it as given.

- **Data snapshot:** 19 August 2026 (DataForSEO, United States, English)
- **Owner:** Howard · **Publisher:** Alex · **Writer:** Grok
- **Repo mechanics:** see [README](../README.md) · **How the site works:** see [architecture.md](architecture.md)

---

## 0. The one thing that changed

The original plan ranked articles by search volume. **This plan ranks them by conversion value.**

Volume is not the goal. A signup is the goal. A 2,400-search keyword where people are idly curious is
worth less than a 260-search keyword where someone is comparing vendors with a credit card open. The
priority order in §4 reflects that, and it is materially different from the old order.

Second change: the August 2026 data was a static snapshot that hid a trend. **"Answering service" as a
query family is in structural decline. "AI receptionist" is growing fast.** Same category, opposite
directions:

| Direction | Examples | YoY |
|---|---|---|
| ↗ Growing | best ai receptionist for small business | **+680%** |
| ↗ Growing | ai receptionist for small business | **+519%** |
| ↗ Growing | ai receptionist pricing | **+450%** |
| ↘ Declining | openphone alternatives | **−77%** |
| ↘ Declining | insurance answering service | **−76%** |
| ↘ Declining | answering service for property management | **−70%** |

Write into the growth, not the decline. Where a declining keyword still has a huge CPC (dental office
at $272, electrician at $264), it is still worth one page — the buyers left are expensive buyers — but
it is not worth a cluster.

---

## 1. The honesty contract — read before every article

This is not a style preference. Claiming a feature NexPhone does not have produces a refund, a bad
review, and a support ticket. It costs more than the click was worth.

**NexPhone is** an AI receptionist on a real US business phone line, for small business owners — mostly
solo home-service operators: plumbers, HVAC techs, electricians, cleaners, handymen, landscapers. They
run the business off a personal cell and lose jobs when the phone rings while their hands are full.

**What it does**

- Answers calls 24/7 with a voice AI that holds a real conversation — no "press 1" phone tree
- Answers using the business's own uploaded information, not the internet
- Takes the job details and texts the owner the lead
- Records, transcribes and summarises every call
- Missed-call text-back: if nobody picks up, the caller gets a text in seconds
- Two-way business texting from a shared team inbox, with AI auto-replies
- Phone menus, call forwarding, team ring groups
- A real US phone number, local or toll-free
- About $20/month solo, $45/month for a team

**What it does NOT do — never claim otherwise**

- Does **not** book appointments into a calendar
- Does **not** take payments
- Does **not** integrate with field-service software (Jobber, Housecall Pro, ServiceTitan)
- Texting does **not** work instantly — it needs a one-time carrier registration first (a few business
  days). Calls and voicemail work from day one.
- The AI escalates anything it can't answer to a human. It never guesses.

**Banned statistic.** Never use "62% of business calls go unanswered." It traces to a 2016 study of 85
businesses and every low-quality competitor repeats it. Using it marks the page as unoriginal.

---

## 2. Conversion architecture

Every post must drive signups. But *how* it converts depends on where the reader is, and getting this
wrong costs rankings.

### The mistake to never repeat

On 17 August 2026 the cost and plumbers guides had their CTAs stripped by hand, because NexPhone's own
pricing had been dropped **inside a neutral vendor price comparison**. That reads as self-dealing, and
it poisons the credibility that makes a comparison page rank in the first place.

The lesson is not "don't sell." It is **keep the neutral section neutral, then sell in a section that
is clearly labelled as ours.** A reader who trusts the comparison will read the block that follows it.
A reader who catches you rigging the comparison will leave.

> **Rule:** NexPhone never appears inside a neutral price table, a "here's what vendors charge" list,
> or a competitor ranking that presents itself as objective. It appears immediately *after* it, under
> its own heading, honestly scoped.

### CTA by funnel stage

Every keyword in §4 is tagged **BOFU / MOFU / TOFU**. That tag sets the conversion treatment.

**BOFU** — comparisons, "best X", pricing, alternatives, trade-specific buying guides. The reader is
choosing a vendor right now. This is where the money is.

- One `:::callout` block titled **"Where NexPhone fits"**, placed after the neutral comparison
- Say plainly who it is right for *and who should buy something else* — the disqualification is what
  makes the qualification believable
- Link `https://nexphone.ai/pricing` once, in that block
- Close with a direct CTA: what to do, what it costs, how long setup takes

**MOFU** — mechanics and how-tos: porting a number, missed-call text-back, texting a landline, toll-free
setup. The reader has a problem and is learning. They are not yet shopping.

- One contextual mention where the product genuinely solves the step being described — not bolted on
- Link `https://nexphone.ai` or a relevant `/features/` page once
- Close with a soft CTA: one or two sentences, no pricing, no urgency

**TOFU** — definitions and curiosity: "what is an AI receptionist", "what is speed to lead", consent
laws. The reader may not own a business yet.

- **No product mention in the body at all**
- Close with a single line and a link. Nothing more.
- These exist to earn links and feed the internal link graph, not to convert directly

### The close

Every article ends with a short, honest CTA. Not "revolutionise your business." Something like:

> NexPhone answers your business line 24/7 for about $20 a month, and most owners are taking calls the
> same day they sign up. It won't book the job into your calendar — if you need that, buy a live
> service. If you need the phone answered at 11pm, [start here](https://nexphone.ai).

Admit the limit in the CTA itself. It converts better than hiding it, and it is the only version that
survives contact with a reader who then signs up.

### Internal linking

Link to other published posts with natural anchor text, once each. **Only link to pages that already
exist** — check §5 before linking. A broken internal link is worse than a missing one.

Every BOFU page should link to at least one other BOFU page and the pillar it belongs to. Cluster
structure is in §3.

---

## 3. Clusters

Six clusters. The cluster a keyword belongs to determines what it links to.

| # | Cluster | Pillar page | State |
|---|---|---|---|
| 1 | **AI receptionist category** — the growth engine | `ai-receptionist-for-small-business` | ✅ Published |
| 2 | **Price & cost** — the money cluster | `answering-service-cost` | ✅ Published |
| 3 | **Home-service trades** — the high-CPC cluster | `answering-service-for-plumbers` | ✅ Published |
| 4 | **Competitor switch & alternatives** — KD 0 bottom-of-funnel | `best-answering-service-for-small-business` | ✅ Published |
| 5 | **Missed calls, texting & phone-line mechanics** | `missed-call-text-back` | Not written |
| 6 | **Property management & multi-unit** — adjacent pool | `answering-service-for-property-management` | Not written |

Cluster 1 pillar is live. Cluster 6 is in −70% decline — build one page, not a cluster.

### Categories (the public taxonomy)

Clusters decide **internal links**. Frontmatter `category` is Alex's closed set:

| Slug | Use for |
|---|---|
| `news` | Launch / company notes (`introducing-nexphone`) |
| `product` | Features and release notes |
| `guides` | Every SEO article |

Do not invent slugs. The site 404s anything else (19 August 2026: four SEO posts dropped off the index after a recategorize). The extra-category experiment (`ai-receptionist` / `answering-service` / `trades`) is abandoned. Cluster structure stays in this table and in the links between posts, not in the URL filter.

---

## 4. The backlog — conversion priority order

**Read this table as given. Do not look up keyword data anywhere else.**

Columns: **Vol** = monthly US searches · **KD** = keyword difficulty 0–100 (lower is easier;
0 is genuine, verified on two endpoints) · **CPC** = what advertisers pay per click, the best available
proxy for commercial value · **Intent** = what the searcher wants · **YoY** = year-over-year search
trend · **Stage** = conversion treatment from §2.

| # | Keyword | Vol | KD | CPC | Intent | YoY | Stage |
|---|---|---|---|---|---|---|---|
| 1 | best answering service for small business | 720 | 13 | $207.71 | commercial | +49% | BOFU ✅ |
| 2 | answering service for plumbers | 480 | 0 | $330.75 | navigational | +69% | BOFU ✅ |
| 3 | ai receptionist for small business | 1,000 | 4 | $51.82 | commercial | **+519%** | BOFU ✅ |
| 4 | best ai receptionist for small business | 260 | 15 | $68.40 | commercial | **+680%** | BOFU |
| 5 | toll free number for business | 1,900 | 9 | $54.68 | informational | +46% | MOFU |
| 6 | hire a receptionist | 1,300 | — | $19.10 | transactional | −19% | MOFU |
| 7 | virtual receptionist pricing | 320 | 1 | $37.00 | commercial | +56% | BOFU |
| 8 | ai answering service for small business | 260 | 17 | $83.42 | commercial | +22% | BOFU |
| 9 | construction answering service | 50 | 0 | $263.43 | navigational | +100% | BOFU |
| 10 | answerconnect pricing | 90 | 2 | $91.90 | commercial | +29% | BOFU |
| 11 | dialpad alternative | 210 | 0 | $142.04 | commercial | −46% | BOFU |
| 12 | after hours answering service | 1,000 | 14 | $180.20 | informational | −45% | BOFU |
| 13 | ai receptionist pricing | 90 | 6 | $34.23 | commercial | **+450%** | BOFU |
| 14 | answering service for contractors | 170 | 0 | $109.31 | navigational | −35% | BOFU |
| 15 | hvac answering service | 480 | 0 | $147.88 | navigational | −56% | BOFU |
| 16 | low cost answering service | 260 | 0 | $81.91 | commercial | −57% | BOFU |
| 17 | answering service for dental office | 170 | 0 | $272.33 | navigational | −67% | BOFU |
| 18 | answering service for property management | 1,000 | 0 | $97.33 | informational | −70% | BOFU |
| 19 | business phone number for llc | 140 | 2 | $71.08 | informational | +143% | MOFU |
| 20 | openphone alternatives | 210 | 0 | $63.66 | commercial | −77% | BOFU |
| 21 | grasshopper alternative | 210 | 0 | $96.08 | informational | −33% | BOFU |
| 22 | google voice alternative | 2,400 | 0 | $7.50 | informational | −21% | MOFU |
| 23 | answering service for hvac company | 260 | 0 | $116.02 | navigational | −50% | BOFU |
| 24 | missed call text back | 390 | 0 | $15.56 | informational | +50% | MOFU |
| 25 | answering service for property management companies | 390 | 0 | $30.70 | informational | −18% | BOFU |
| 26 | ai receptionist for plumbers | 30 | — | $43.44 | transactional | — | BOFU |
| 27 | electrician answering service | 70 | 0 | $264.18 | navigational | −67% | BOFU |
| 28 | rosie ai receptionist | 210 | 1 | $21.49 | navigational | — | BOFU |
| 29 | text message for missed calls | 320 | 0 | $13.21 | informational | +129% | MOFU |
| 30 | 2 phone numbers on one phone | 590 | 3 | $13.16 | informational | −19% | TOFU |
| 31 | missed call text back software | 110 | 0 | $22.85 | informational | +125% | BOFU |
| 32 | how to port a phone number | 590 | 19 | $37.41 | informational | −46% | MOFU |
| 33 | insurance answering service | 210 | 0 | $89.69 | informational | −76% | BOFU |
| 34 | can you text a landline | 480 | 0 | $10.00 | informational | −19% | TOFU |
| 35 | answering service cost | 260 | 0 | $61.63 | informational | −50% | BOFU ✅ |
| 36 | what happens if you text a landline | 720 | 0 | — | informational | — | TOFU |
| 37 | smith.ai reviews | 480 | 0 | $27.58 | informational | −64% | BOFU |
| 38 | how much does an answering service cost | 210 | 0 | $56.89 | informational | −50% | BOFU |
| 39 | speed to lead statistics | 90 | 33 | $30.54 | informational | −22% | TOFU |
| 40 | after hours answering service property management | 110 | 0 | $96.06 | informational | −64% | BOFU |
| 41 | what is speed to lead | 70 | 16 | $10.90 | informational | +450% | TOFU |
| 42 | pest control answering service | 30 | 0 | $59.12 | navigational | −75% | BOFU |
| 43 | answering service for plumbing companies | 70 | 0 | — | navigational | — | BOFU |
| 44 | what is an ai receptionist | 50 | 0 | $10.53 | informational | — | TOFU |
| 45 | hvac after hours answering service | 140 | 0 | — | navigational | −58% | BOFU |
| 46 | call recording consent laws by state | 20 | — | — | informational | +50% | TOFU |
| 47 | ai receptionist reviews | 20 | — | $17.33 | informational | −50% | MOFU |
| 48 | missed call text back calculator | 30 | 0 | $6.93 | informational | −40% | TOFU |

**Ranking formula**, so you can slot in a new keyword later without guessing:

```
score = √volume × √CPC × intent_weight × trend_multiplier

intent_weight:      transactional 3.0 · commercial 2.5 · navigational 1.5 · informational 1.0
trend_multiplier:   YoY ≥ +45% → 1.5 · YoY ≤ −40% → 0.5 · otherwise 1.0
```

### Killed from the backlog

| Was | Keyword | Why |
|---|---|---|
| #33 | stir shaken spam likely business calls | **No DataForSEO record at all** — no volume, no KD. Not a real query. |
| #35 | a2p 10dlc registration small business | **No DataForSEO record at all.** Same. |
| #51 | speed to lead statistics *(duplicate)* | Already at #39. Two articles on one keyword cannibalise each other. |

### Notes on specific keywords

- **#2 answering service for plumbers** — highest CPC on the list at $330.75, and rising (+69% YoY,
  July spiked to 1,000 searches). But live intent is **navigational**: people are searching for a
  specific provider by name, not browsing. Written and published — the CTA rebuild in §2 applies here
  first.
- **#3 / #4 the AI receptionist pair** — +519% and +680%. This is where the category is going. #3 is a
  cluster pillar and is not written. Highest-leverage gap in the plan.
- **#18 property management** — the old plan had this near the top on a 1,000/mo figure. That number is
  an annualised average hiding a collapse: 1,900/mo in Sep 2025 → 390/mo in Jun 2026, −70% YoY. One
  page, not a cluster.
- **#12 after hours answering service** — old plan tagged this commercial; live data says
  **informational**. Treat as MOFU-leaning BOFU: answer the question first, sell late.
- **#29 text message for missed calls** — old plan tagged transactional; live data says
  **informational**.
- **#14 answering service for contractors** — old plan tagged commercial; live data says
  **navigational**.
- **#17 / #27 dental office and electrician** — both in steep decline (−67%) but carrying $272 and $264
  CPCs. Worth one page each. Not worth a cluster, not worth a follow-up.

---

## 5. What is already published

Check this list before adding an internal link. If it is not here, do not link to it.

| Slug | Keyword | Status |
|---|---|---|
| `/blog/introducing-nexphone` | — (launch post) | Live |
| `/blog/answering-service-for-plumbers` | answering service for plumbers | Live |
| `/blog/answering-service-cost` | answering service cost | Live |
| `/blog/best-answering-service-for-small-business` | best answering service for small business | Live |
| `/blog/ai-receptionist-for-small-business` | ai receptionist for small business | Live |

Also live and safe to link: `nexphone.ai/pricing`, the `/features/` pages, `nexphone.ai`.

When a new URL goes live, re-read every published post and add one natural link to it. Do not
link to drafts. A broken internal link is worse than a missing one.

---

## 6. How to write one article

### Voice and structure

The template is [`posts/answering-service-for-plumbers.md`](../posts/answering-service-for-plumbers.md).
Match its voice, structure and formatting. Specifically:

- **Open with a concrete scene**, not a general statement. "It is 11:04 on a Tuesday night…" not "In
  today's competitive market…"
- **Answer the question in the first 200 words**, under a heading called **"The short answer"**
- Plain, direct, specific. Short paragraphs. One idea per section.
- Written for a small-business owner reading on a phone between jobs. Not a developer. Not a marketer.
- **Honest numbers only.** Cite a primary source and its date, or leave the number out.
- Include a comparison when the question implies one — as a **list, not a GFM table**. The site
  renderer does not parse markdown tables in post bodies.
- Admit the product's limits somewhere. It builds more trust than it costs.
- No hype, no "in today's fast-paced world", no AI filler.
- After the first draft, run a deslop pass against [`docs/anti-slop.md`](anti-slop.md). The VPS
  writer does this as a second Grok call before the checklist. Do not ship a draft that still
  has binary contrasts, negative listings, colon reveals, or banned words.

### Custom blocks

```
:::callout
A short, bolded-first-line aside for the one thing the reader must not miss.
:::

:::steps
Step name :: What happens in that step, one sentence.
Another step :: Another sentence.
:::

:::stats
Big number :: What it means
Another :: What it means
:::
```

### Required frontmatter

```yaml
---
title: "The article title"
date: 2026-08-19          # today, YYYY-MM-DD
category: guides              # news | product | guides — see §3
excerpt: One sentence for the Google result. MUST be under 155 characters.
author: NexPhone Team
cover: images/<slug>/cover.webp   # required — real Pexels photo, ≤300KB
draft: true               # always — Alex publishes
faq:                      # 4-5 entries targeting real long-tail searches
  - q: A real question someone would search?
    a: A short, direct answer.
---
```

### Length

2,000–3,000 words for BOFU and MOFU. 1,200–1,800 for TOFU. Long enough to beat what currently ranks,
not padded.

### The assignment format

To commission the next article, fill this in from §4 and paste it to Grok in a **fresh chat** after the
setup prompt:

```
ARTICLE ASSIGNMENT

TITLE:            <write one — question-shaped, year in it if it's a cost/best page>
TARGET KEYWORD:   <exact phrase from §4>
SEARCHES/MONTH:   <Vol>
DIFFICULTY:       <KD> out of 100
VALUE PER CLICK:  $<CPC>
SEARCH INTENT:    <Intent>
TREND:            <YoY>
FUNNEL STAGE:     <Stage>  ← sets the CTA treatment, see §2
LENGTH:           <words>
CATEGORY:         guides
FILENAME:         <keyword-as-slug>.md

INTERNAL LINKS (only pages listed in §5):
- <…>

Write the complete markdown file now, following the content strategy.
```

---

## 7. Pre-publish checklist

Run this before anything goes to Alex.

- [ ] Question answered in the first 200 words, under "The short answer"
- [ ] Opens with a concrete scene
- [ ] Every statistic has a named source and a date
- [ ] The banned 62% statistic does not appear
- [ ] Does **not** claim NexPhone books appointments, takes payments, or integrates with field-service
      software
- [ ] Does **not** claim texting works instantly
- [ ] NexPhone does **not** appear inside a neutral price comparison
- [ ] CTA treatment matches the funnel stage in §4
- [ ] Product limits admitted somewhere
- [ ] Every internal link points to a page listed in §5
- [ ] Comparisons are lists, not GFM tables
- [ ] Excerpt under 155 characters
- [ ] `draft: true` present
- [ ] Filename is the slug and will never change

---

## 8. What not to do

- **Do not create a page per keyword variant.** One keyword, one page. "answering service cost" and
  "how much does an answering service cost" are the same page — pick the stronger and redirect the
  intent inside it. Same for the plumbers/plumbing-companies and property-management pairs.
- **Do not chase volume into a declining query.** A −70% keyword at 1,000/mo will be a −70% keyword at
  300/mo by the time the page matures.
- **Do not invent features.** Re-read §1.
- **Do not publish without a date on every number.** Prices move; an undated price is wrong within a
  quarter.
- **Do not use GFM tables in post bodies.** The renderer drops them.
- **Do not rename a published file.** The filename is the permanent URL.

---

## 8a. Cadence (agreed 19 August 2026)

**Launch sprint, through 30 September 2026:** **4 unique BOFU/MOFU guides per week.**
Monday–Thursday one new URL each day. Friday is internal links and CTA checks — not a fifth URL.
Weekends are off.

**Steady state, from 1 October 2026 (or earlier if GSC is already showing impressions):** **2–3
guides per week.** If a live URL is stuck at positions 11–20 after 8+ weeks, expanding it beats
writing a sibling.

**Never daily. Never a fifth new URL in a week. Never a page per keyword variant.**

Why 4, not 2: this domain has no Search Console history. Rankings look dead for ~6 weeks even when
the page is fine. That clock starts at publish. Four distinct commercial URLs a week starts sixteen
conversion pages in a month instead of eight.

Why not 5+: the Valta lesson (daily thin posts cut impressions ~60%) and the honesty bar. A BOFU
comparison with undated prices or invented features costs more than a delayed HVAC page.

Writer: **Grok** (`grok-4.6` via the xAI API), orchestrated on the VPS. See
`~/nexphone-blog-agent/` on `trader@82.180.133.216`. Human (Alex) can still un-publish by
re-adding `draft: true`.

Order for the rest of the launch sprint, after the comparison pillar:

1. `ai-receptionist-for-small-business` (cluster 1 pillar, +519%)
2. `hvac-answering-service`
3. `ai-receptionist-pricing` (+450%)
4. `missed-call-text-back`

---

## 9. Refreshing this data

The keyword table is a snapshot from **19 August 2026**. It does not need refreshing to write — that is
the point of this document. Refresh it when:

- Six months have passed, or
- A keyword's page has been live 90 days and is not ranking, or
- You are adding keywords not already in §4

Refreshing requires DataForSEO, which Grok does not have. Ask Howard — the endpoints are
`dataforseo_labs_google_keyword_overview` for volume/CPC/intent/trend and
`dataforseo_labs_bulk_keyword_difficulty` for KD. Both are needed: the overview endpoint omits the KD
field entirely when difficulty is 0, so KD must be confirmed on the bulk endpoint before it is
recorded as 0.

Full 51-row backlog with the original brief's columns preserved alongside live data:
`~/nexphone-seo/backlog.csv` on the VPS.
