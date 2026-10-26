# ATREZZO — 308 Construction project status

Updated: 2026-10-26. Public repository is an **unofficial design demo**.

| Phase | Status | Evidence / decision |
|---|---|---|
| Original website audit | CLOSED | Source pages reviewed on www.308gc.com and project-1 through project-4 |
| Strategy and information architecture | CLOSED | Ten approved client-side views; three services, four named project views |
| Brand direction | CLOSED | Industrial Architectural; teal, charcoal, Inter/Barlow Condensed |
| Gemini prototype review | CLOSED | Original HTML reviewed; factual and structural faults identified |
| Baseline code import | CLOSED | Five files committed on main; HTML, CSS and JS fetched back and checked structurally (not browser-tested) |
| Cinematic home redesign | IN VALIDATION | Cinematic hero, three editorial service chapters, four-project asymmetrical portfolio, clients, CTA; structural checks passed, visual sign-off pending |
| Inner-page redesign | IN PROCESS | Services and Projects implemented; About 3.0 implemented and in validation; Careers and Contact still pending |
| Assistant and form behavior | IN VALIDATION | Scripted assistant only; submission is explicitly disabled |
| Responsive/accessibility/functionality | IN VALIDATION | CSS breakpoints, JS syntax, HTML structural balance and Services anchor structure checked; visual checks at 375/768/1024/1440 and interactive testing still pending |
| GitHub Pages preview | IN VALIDATION | Pages configured from main/root per connected GitHub Settings tab; public site browser tab observed, latest deployment not visually rechecked |
| Client publication | BLOCKED | Requires client consent, assets and QA |

## Outstanding decisions
- Original logo and verified public contacts retained. Original logo currently served remotely from Wix.
- Replace all illustrative project imagery with client-approved assets only after approval.
- Careers uses a company name requiring verification.
- No official claims, case-study photographs, or live forms should be inferred from this prototype.
- Keep approved components fixed during subsequent phases unless a genuine defect is found.

## Home second review — 2026-10-26 (code + public DOM; no screenshot inspection)

**Status: IN VALIDATION. No Home HTML/CSS/JS was changed in this review.**

Concentrated follow-up corrections before closing the Home:
1. **HIGH — CSS contrast:** `#38A8B3` on `#F3F2EF` is approximately 2.53:1; use a darker teal such as `#116B76` for small text on light sections. Keep existing brand accents on dark sections.
2. **HIGH — Duplicate illustrative imagery:** construction hero repeats as Construction chapter; architectural image repeats in introduction and contact CTA; technical image repeats in management and MEP. Give each scene distinct illustrative media.
3. **HIGH — Scroll image masks not active on most service/project images:** selectors require `.image-mask[data-reveal]`, but the attribute is on their parent `.chapter-row` or `.editorial-project`. Repair without changing layouts and retain reduced-motion behavior.
4. **MEDIUM — Editorial copy:** reduce awkward meta-phrasing about "the original website" within customer-facing section body copy, while keeping the separate unofficial-demo and image disclaimers.
5. **MEDIUM — Conversion:** make "Discuss Your Project" the main Home hero action; retain "Explore Projects" as secondary.
6. **MEDIUM — Device QA:** no new browser screenshots or interactive checks at 375, 768, 1024, 1440 px in this review. Existing responsive CSS remains pending verification.

**Keep locked:** approved typography, color system, Home architecture, verified service/project scope, 10-view router, ASK 308, and unofficial-demo markers.

## Home visual adjustment — 2026-10-26

**IN VALIDATION — implemented in GitHub, awaiting visual confirmation.**

- Converted only the three **Home** service chapters (Preconstruction Planning, Construction, Construction Management) into full-width photographic scenes with dark legibility overlays. Preserved each chapter's verified copy, CTA, and typography.
- Replaced unrelated coding imagery and the broken construction photo **within those three chapters** with Pexels illustrative photos; other page content was not redesigned.
- Added muted decorative hero construction footage (Pexels video 853867) and a static fallback poster. The video is not preloaded on compact screens, reduced-motion configurations, or Save-Data connections; it pauses when the visitor navigates away.
- Added `MEDIA-SOURCES.md` with specific free-media source pages and usage notes.
- Verified GitHub file commits, ten client-side views intact, 3 Home service scenes, HTML tag balance, CSS brace balance and video script references.
- **NOT YET VERIFIED:** actual remote video playback, photo rendering, visual responsive layouts at 375/768/1024/1440, and media loading/performance. Test on public GitHub Pages before marking as closed.

## Hero CTA pointer fix — 2026-10-26

**IN VALIDATION — pushed to GitHub, live click test pending.** Fixed CSS layering after adding the decorative construction video: hero background at z-index 0 with pointer-events disabled, hero content at z-index 3, gradient pointer-events disabled. Both original `Explore Projects` and `Discuss Your Project` button handlers remain unchanged. Verified the updated CSS and button markup in GitHub. No HTML, JS, or other-page design changes.

## Home Services cinematic scroll sequence — 2026-10-26

**Status: IN VALIDATION (implementation complete; visual/device QA not independently verified).**

- Reorganized only the three Home service chapters into a full-width sequence outside the text grid.
- Desktop (1024+ px, minimum viewport height 700 px, hover device): native CSS sticky stacking and gently progressive image masks tied to scroll position through passive events + requestAnimationFrame. No scroll-jacking, forced snapping or scroll blocking.
- Mobile/touch/short viewport and reduced-motion: static full-bleed image sections in normal vertical flow, no sticky/mask animation.
- Kept the three original photos, titles, service descriptions and `EXAMINE SERVICE` actions. Preserved the Home hero video, navigation, dedicated Services page, four project pages and ASK 308.
- Additional Home QA: corrected small teal labels on light backgrounds, added visible focus outline for project tiles and repaired portfolio image-mask reveals with reduced-motion fallback.
- GitHub checks: all ten page views retained; three service scenes, their three backgrounds and three CTAs present; HTML div/section balances, CSS braces and JavaScript syntax verified.
- **Still to verify visually in the live browser:** seamless stacking on desktop, actual animation smoothness, photo rendering, button hit targets, 375/768/1024/1440 px viewports, and runtime console errors. No independent device screenshot QA was available during this code update.

## Home Services — pinned scenes + scroll zoom refinement — 2026-10-26

**Implemented; IN VALIDATION for real-browser interaction.** This refines the existing approved full-background service chapters only.

- Desktop 1024px+ / >=700px height / hover device: three 100svh sticky chapters stack naturally. As the next chapter scrolls upward, the currently pinned image receives a very gentle scroll-linked zoom (roughly 1.04x→1.105x), with small vertical pan; the incoming image settles as it arrives.
- Sticky ancestor overflow reset on eligible desktop sizes to ensure pinned behavior. CSS pointer-events for decorative images remain disabled; service buttons remain interactive.
- Mobile, touch devices, short viewports and `prefers-reduced-motion`: normal scrolling, static background photos, no scroll zoom.
- Unchanged: Hero video, copy, the three service photos, service CTA targets, independent Services page, Projects and ASK 308.
- Verified in repository: 10 views, 3 backgrounds and 3 CTA handlers, balanced HTML/CSS, JavaScript parser, desktop sticky + mobile fallback rules.
- **Pending:** live visual and pointer testing at 375/768/1024/1440px, smoothness/performance and public deployment propagation. The web renderer was not available for screenshot-based validation in this run.

## Home Services — visibility fix (desktop breakpoint + cache) — 2026-10-26

**Status: IN VALIDATION — GitHub changes saved; external Pages/browser animation not directly tested.**
- User reported no visible change after pinned zoom deployment.
- Root causes detected in source: scene CSS and JS unnecessarily required at least 700px of usable viewport height, silently disabling laptop-height desktop animation; HTML referenced unversioned local CSS and JS assets susceptible to client caching.
- Updated both media conditions to support desktop viewports >=560px high, provided tighter typography/padding at 560–760px, raised the scroll-linked zoom strength modestly, and versioned both asset URLs (`20261026-home-scenes-04`).
- Retained original content and photo assets, scroll-driven natural sticky stacking, three CTA links, mobile/touch and reduced-motion fallbacks, and all separate page views.
- **Verify next:** opening a fresh URL with `?v=20261026-home-scenes-04`, observing the pinned sequence and image zoom on a desktop browser, and checking buttons at desktop/mobile widths. Only mark closed after visual acceptance.

## Home Services — responsive cinematic effects — 2026-10-26

**IN VALIDATION — implemented in GitHub (mobile and tablet, awaiting live-device review).**

- Request: extend the approved Home Services sticky stacking and subtle scroll-linked background zoom beyond desktop.
- Found prior CSS and JS explicitly restricted the effect to desktop (`min-width:1024px` and `hover:hover`); therefore it could never run on most mobile/tablet touch devices.
- Unified sequence pinning for viewports >=560px high when `prefers-reduced-motion:no-preference`. All three service scenes rise and overlay in natural vertical scroll on phones, tablets and desktop. Mobile uses a gentler scale/pan and no photo clip-path; tablet/desktop retain reveal clipping.
- For short landscape viewports and reduced-motion users, graceful static vertical flow. Mobile-specific text/CTA spacing avoids clipped copy, maintains tap target of at least 44px, and decorative images have pointer events disabled.
- Added responsive `srcset` variants to the three existing illustrative Pexels photos; updated HTML asset query versions to `20261026-home-scenes-05` to avoid stale CSS/JS on reload.
- GitHub static checks: 10 page views, 3 chapters/photos/CTAs, balanced HTML and CSS, parseable JS, matching CSS/JS media conditions and cache-busted asset URLs.
- **NO COMPROBADO:** real scroll animation, button click test, image load, layout or smoothness at 375, 768, 1024, 1440px on the public Pages site. Public website inaccessible to automated browser verification from this environment; requires visual review before closing Home.

## Home Portfolio — architectural image-overlay gallery — 2026-10-26

**IN VALIDATION — implemented, awaiting visual acceptance at mobile/tablet/desktop.**

- Rebuilt **only the Home Portfolio gallery**, replacing the former staggered unequal-height grid with an editorial composition: large featured UNT Matthews Hall tile + three secondary tiles (TWU Old Main, Plano ISD Bleachers, MEP Projects).
- Category, verified project name, published project description and View Project action appear **inside** each image, over dark legibility gradients. Every full tile is a semantic link to its existing site view (`?view=unt`, `twu`, `plano`, `mep`).
- Four replacement Pexels photographs visually correspond to categories and are **not** actual project photography. Their source links are recorded in `MEDIA-SOURCES.md`; a single unobtrusive note appears below the gallery.
- Refined image zoom on hover/focus, focus styles, reduced-motion support, desktop one-feature/three-side arrangement, tablet reflow and single-column mobile layouts. Original four project details and routes are retained.
- Removed the conspicuous top demo ribbon and repetitive media/demo labels from the Home. Kept a concise independent-design notice in the global footer; non-sending forms remain explicitly identified as previews.
- CSS/JS cache versioned as `20261026-portfolio-02`.
- **Static verification complete:** ten page views preserved, four project links resolve to existing view IDs, one featured tile, all media IDs/sources, HTML tag balance, CSS brace balance and JavaScript syntax, CSS breakpoint/focus/reduced-motion selectors.
- **NOT CHECKED:** actual image loading, layout screenshots at 375/768/1024/1440px, dynamic hover/tap navigation, mobile text overflow, visual appearance on GitHub Pages. Obtain browser review before closing Home.

## Home final QA gate — 2026-10-26

**VISUAL DIRECTION APPROVED by user. FINAL QA: EN VALIDACIÓN, not CERRADA.**

- Ran a source-level audit across current Home HTML/CSS/JS and recorded the detailed evidence/test matrix in [ATREZZO-HOME-QA.md](./ATREZZO-HOME-QA.md).
- **VERIFICADO:** all 10 page views and internal navigation references resolve, no duplicated IDs, all Home sections/3 service chapters/4 Portfolio tiles preserved, `h1` per view, source file syntactic checks, responsive and reduced-motion CSS paths, independent-design/media disclosures, representative static color contrasts, original third-party media source listings.
- **NO COMPROBADO:** published site at exact 375/768/1024/1440px, dynamic scroll pinning/zoom, live clicks, video/photo HTTP success, actual visual contrast over photos, PageSpeed/console/accessibility. Live website browsing/rendering from this environment was unavailable.
- Do not repeat approved design work or mark Home QA as closed until these live tests are completed and passed. No new layout changes made in this QA pass.

## Services 2.0 — implemented cinematic scroll chapters — 2026-10-26

**Implementation committed to main; status: IN VALIDATION pending live visual acceptance. Home unchanged.**

- Replaced only the SPA `page-services` section with a consistent Services layout: photo hero; compact service index; three editorial full-bleed pinned service chapters (01 Planning → 02 Construction → 03 Construction Management); two image-overlay Related Projects tiles (UNT and TWU) and an aligned final CTA.
- Each Services chapter is `position:sticky;top:0;height:100svh` under normal motion, with ascending z-indices. The next chapter naturally rises over the previous one; no wheel/touch interception or scroll snap. Lightweight JS applies a gentle photo scale/pan on scroll. Tablet/phone use the same stacking; very short phone landscapes and reduced-motion users retain static vertical sections.
- Retained actual three confirmed services, original scopes and CTA destinations; no invented offerings or project imagery. Photos are licensed Pexels stock, **not actual 308 Construction personnel, sites or jobs**; photo pages/IDs credited in `MEDIA-SOURCES.md`. Related Projects reuse the same UNT/TWU illustrations as approved on Home.
- Removed repeated visual-disclaimer blocks and awkward meta-copy from the Services content. One understated photo notice remains beneath related projects, with independent-design language in footer.
- Corrected teal label contrast for light backgrounds by using #116B76. Improved interactive focus rings, legibility overlays, mobile CTA sizes, fluid headings, reduced-motion and tablet composition. The Services hero image is lazy-loaded with low fetch priority because Services is hidden on initial Home load.
- Asset URLs in `index.html` versioned as `20261026-services-01` to invalidate cached JS/CSS.
- **VERIFIED IN REPO:** 10 page views, one H1 per page view, no duplicate IDs or broken `navigateTo` references, three Scenes/section anchors, original Home's three scene nodes plus four Portfolio tiles preserved, balanced HTML/CSS, JS parsed, explicit mobile/tablet/reduced-motion CSS rules, links for both Related Projects.
- **NOT CHECKED:** actual GitHub Pages media loading, sticky/zoom smoothness, tap and scroll interactions, screenshots at 375/768/1024/1440px, full accessibility or performance. Never present code checks as live QA.


## Projects 2.0 — editorial gallery and four case pages — 2026-10-26

**IMPLEMENTED — EN VALIDACIÓN (visual/user acceptance pending).** Creative scope: Projects overview + four existing project detail views; previously approved Home and Services layouts remain untouched.

- Replaced the generic four-card Projects grid with a spacious editorial `SELECTED WORK` composition: one full-width featured university project, two coordinated half-width entries, and a panoramic MEP entry. Category, sourced project description and `EXPLORE PROJECT` sit inside legible photographic overlays; the complete card is a real anchor to its existing client-side route.
- Rebuilt all **four** details (`unt`, `twu`, `plano`, `mep`) as cohesive architectural case-story pages: visual hero, project overview, recorded facts, verified scope list, next-project card, `ALL PROJECTS` and Contact CTA. No new project cases added.
- Source-derived content retained: UNT Matthews Hall's reported `approx. 4,000 sq. ft.`, dean's suite, restrooms, lighting and finishes; TWU Old Main's plaster, painting and skylight glass plus scaffold/multi-shift coordination; Plano ISD's six job sites and bleacher/electrical/concrete work; MEP's published 100 kW generator troubleshooting and 50 data-center drain-pan replacements. Avoided presenting the MEP examples as a single site.
- Reused exactly four pre-sourced **category illustration photos** from the approved Home Portfolio (`MEDIA-SOURCES.md`). **None is project photography**; one small photo clarification per page and the existing independent-design footer remain. Removed redundant photo badges, misleading individual `alt` descriptions and generic invented result claims.
- Implemented responsive CSS with 375px, <=767px, <=1023px, desktop gallery/layout changes, keyboard focus styles, reduced-motion rules and scroll-entry reveal animations using the existing `IntersectionObserver`. No extra framework or media asset uploads. Cache-busted linked CSS/JS with `20261026-projects-01`.
- **Verified in GitHub source:** all ten page views still exist with one H1 each; zero duplicate element IDs; zero undefined `navigateTo` targets or broken in-page fragments; four gallery cards, four project pages, 21 detail scope lines, 12 responsive img srcsets; all photo IDs trace to `MEDIA-SOURCES.md`; JS parses and HTML/CSS structural checks pass; Home portfolio cards and Services chapters are preserved.
- **NO COMPROBADO:** public website screenshot at 375/768/1024/1440px, mouse/tap/keyboard behavior, actual photo HTTP loading and cropping, accessibility assessment and performance. Browser presentation and user sign-off needed before phase status can be **CERRADA**.

## Projects — hero legibility + image-led case pages — 2026-10-26

**IMPLEMENTED — EN VALIDACIÓN (live browser + user sign-off pending).** Requested adjustment completed in GitHub; all four project detail routes `unt`, `twu`, `plano`, `mep`.

- Reviewed user's 2026-10-26 screen recording. The project hero showed photograph and **text both darkened**, consistent with the absolutely positioned shade being above normal-flow headline. Fixed stacking explicitly: image `z-index:0`, lighter gradient `z-index:1`, inner content `position:relative;z-index:2`. Scoped change affects **only project detail heroes**, not Projects overview, Home or Services. Retained white primary heading and cyan accent for legibility.
- Added one bespoke three-image bento-style **PROJECT IMAGERY / VISUAL STUDY** gallery to every project *after* Work Included and *before* Continue Exploring. One main large photograph on left and two smaller detail photos on right for desktop/tablet; mobile stacks one full-width lead above two supporting tiles. Subtle hover zoom, lazy responsive Pexels `srcset`, keyboard-safe static non-clickable media, reduced-motion fallback and reveal on scroll.
- Twelve newly selected Pexels illustrations match each project's category: university corridor/offices/accessible space; historic atrium/rotunda/skylight; stadium/bleachers; power generator/electrical controls/data center. They are **not** site photographs or proof of any 308 Construction work; the one consolidated note in each case gallery is essential. Source URLs added to `MEDIA-SOURCES.md`.
- CSS/JS asset query versions bumped to `20261026-project-visuals-02`.
- **Verified in repository:** 4 project routes × 3 photos = 12 images, each gallery placed in correct order before Continue Exploring, photo notes, sources tracked, hero layer order, mobile and desktop grid selectors, reduced-motion fallback, all 10 original page routes intact, no duplicate IDs/missing navigation destinations, syntax/brace and HTML nesting balance, original Home + Services scene counts unchanged.
- **NOT CHECKED:** live deployed rendering / picture HTTP success, actual text contrast against dynamic image, interactive animations, performance, photo cropping at 375/768/1024/1440px. Static code validation is not a live device test.

## About 3.0 — editorial company page — 2026-10-26

**Status: EN VALIDACIÓN** (implemented in GitHub; visual/device QA and user acceptance pending).

- Replaced only the About view with its own editorial design: light split hero and striking vertical architectural photo; source-grounded staff-experience narrative with **45+ years of experience across staff** (NOT years in business); full-width renovation-space interlude; three large clickable service rows; five source-listed markets; selected eight organizations from published client list; service-priority statement; verified Argyle corporate-office/contact CTA.
- **Facts sourced to the official published website** `https://www.308gc.com/` ABOUT / SERVICES / CLIENTS / CONTACT. Avoided invented executives, founding date, certifications, credentials, projects, quotes, clients or services. These sources and their exact supported facts are noted in `MEDIA-SOURCES.md`.
- Three distinct Pexels architectural stock photos (ids 18381375, 14541104 and 35548971) are illustrative. Each source is documented in `MEDIA-SOURCES.md`; a concise disclaimer is included in the About view. Never represent them as 308 Construction offices, staff or actual projects.
- Added About-specific CSS with architectural grid, non-card client roster, editorial services rows, accessible contrast and focus states; mobile layouts/scroll at 375, 768, 1024 and 1440 target widths; CSS motion-reduction fallback. Added `.about-v3 [data-reveal]` to the existing shared IntersectionObserver. Asset query versions updated to `20261026-about-01`.
- **VERIFIED IN GITHUB SOURCE:** all ten page-view IDs intact, exactly one H1 per view, no duplicate IDs or broken `navigateTo` targets, three About services, five markets, eight source-listed clients and three sourced images; CSS brackets/HTML tags balanced and JS parses. Previously approved Home, Services, Projects and Careers/Contact **content unchanged** except shared CSS/JS asset versions. Light paper #F3F2EF vs accent dark teal #116B76 has calculated 5.54:1 contrast for text.
- **NO COMPROBADO:** public site's real image loads/crops, layout screenshots at 375/768/1024/1440px, keyboard/focus order in browser, live navigation and animations, full WCAG 2.2 AA audit and performance. User should visually approve prior to closing About.

## About continuity hotfix — 2026-10-26

**User-reported defect: About appears to stop immediately below the hero. Corrective code committed; live visual acceptance pending.**

- About source HTML already contained all sections after Hero: Company Profile (45+ staff experience), architectural interlude, Services, Markets, Clients, Customer Service statement and Contact CTA. The report points to a rendering/visibility failure, not missing page content.
- The About wrapper used `overflow:clip` and the new About `[data-reveal]` selectors started at `opacity:0` in JS-enhanced mode. Unlike ordinary content, such blocks can stay blank if the one-shot IntersectionObserver doesn't reveal them after SPA navigation. **Both were removed as prerequisites for visibility** on About only.
- Added an About-only CSS visibility guard on the active `page-about` to keep all post-hero sections in normal vertical document flow, with explicit visible content and responsive figure sizing. No changes to Home/Services/Projects DOM or effects.
- Bumped CSS/JS query string to `20261026-about-fix-02` to invalidate cached styles.
- **Verified in code:** About contains every section; 10 site routes present; Home 3 scenes, Services 3 scenes and Projects 4 galleries retained; HTML tag counts and CSS brace count balanced.
- **NO COMPROBADO:** browser screenshots, real GitHub Pages deployment state, whether the original symptom reproduces in Chrome/Safari on 375/768/1024/1440 widths. Mark About **EN VALIDACIÓN** until user confirms correct display. Do not claim the rendering problem was visually tested.

## About refinement — completed space and meaningful content — 2026-10-26

**IMPLEMENTED IN GITHUB · EN VALIDACIÓN.** Responds to two user-reviewed About screenshots.

1. Replaced the full-width unfinished construction photo directly after the About profile with Pexels **32967976**, a finished, daylight-filled modern commercial atrium (cinematic CSS tonal grade). This is **illustrative photography only**, not a 308 Construction project, office or client site. Updated `MEDIA-SOURCES.md` with the actual photo source.
2. **Removed** the About page's redundant "THREE CORE SERVICES" rows, which the user found repetitive and not usefully linked. The three confirmed services remain intact on their separate Services view; no new information or claims added to pad About. The About layout now runs: split Hero → Company Experience → Finished Architecture interlude → Markets → Published Clients → Customer Service statement → verified Contact.
3. Replaced hero's cross-page `EXPLORE OUR SERVICES` link with the in-page anchor `ABOUT THE COMPANY` pointing to the real `#ab-profile-title` heading. This gives a meaningful destination on the same page. Adjusted labels 02–05 to reflect the removed section.
4. Kept Home, Services, Projects and other About factual content intact; changed only About HTML, About-specific CSS styling and its photo source documentation. CSS/JS URLs cache-busted as `20261026-about-refine-03`.
5. **VERIFIED IN SOURCE:** 10 SPA pages, no duplicated IDs, correct in-page About anchor, no redundant services rows in About, 3 original Home scenes, 3 original Services scenes, 4 Projects image galleries and balanced HTML/CSS.
6. **NOT CHECKED:** actual image render/crop or performance, click behavior in deployed browser, and responsive screenshots at 375, 768, 1024 and 1440. Await user visual confirmation before closing About.

## About cinematic contact background — 2026-10-26

**IMPLEMENTED · EN VALIDACIÓN (visual browser QA still pending).** Added an illustrative, full-width photo background to the final `ABOUT / CONNECT WITH 308` CTA, per user screenshot/request. The source is a finished commercial lobby with windows (Pexels photo **32674962**); full credit and non-attribution rule documented in `MEDIA-SOURCES.md`.

- Contact CTA hero photo is an HTML `img` with responsive `srcset`, `sizes=100vw`, lazy loading and decoding async. Decorative `alt=""` inside `aria-hidden` container. No claim that this photo is a 308 Construction project.
- Dark gradient/photo grade on background `z-index:0`, scrim `z-index:1`, contact content `z-index:2` to keep headline, buttons, phone and address readable. Stronger uniform overlay on mobile.
- The text, `CONTACT 308` route, verified telephone number and Argyle corporate office text are unchanged; this is a targeted visual edit only to the About CTA.
- Asset cache version `20261026-about-cta-bg-04` included in HTML. Home, Services, Projects, Careers, Contact content remain unchanged.
- **VERIFIED in source:** image link/credit, CTA nesting, correct stacking selectors, responsive mobile rule, HTML/CSS structural balance, navigation and 10 page routes. **NOT VERIFIED live:** remote Pexels CDN image render, actual visual contrast/crop at 375/768/1024/1440px, animations/clicks in deployed browser.

## About verified figures + full published client list — 2026-10-26

**IMPLEMENTED IN GITHUB · EN VALIDACIÓN for live visual/mobile review.**

- Verified both original figures on the official public source `https://www.308gc.com/` (Projects/Clients sections, consulted 2026-10-26): **6,123 Projects Completed** and **1,865 Contractors Appointed**. They are site-published claims, *not independently audited*; preserve original labels and numerical values.
- Added About section `03 / FIGURES PUBLISHED BY 308` between Markets and Clients. Distinct premium deep-teal section with huge static display figures, accessible labels and a modest source qualification. Kept original approved 308 palette; **did not imitate** the Wix yellow statistics strip or invent related KPIs.
- Expanded About's `04 / PUBLISHED CLIENTS` from 8 to **23 unique names** listed as text by the original website; deduplicated the repeated Northwest ISD and Plano ISD. Kept source spelling/abbreviations where used, including UTA, UNT and TWU, without claiming photographic evidence, endorsements or unavailable client logo rights. Layout is responsive editorial typography, 3 desktop columns / 2 tablet / 1 mobile.
- Renumbered subsequent `OUR APPROACH` and `CONNECT WITH 308` sections 05 and 06, and bumped asset versions to `20261026-about-trust-05`.
- **SOURCE-CODE CHECKS:** no modifications outside About HTML + appended About CSS except asset version links; ten routes, all previously approved Home/Services/Projects scenes, existing About images, text and contact CTA unchanged; balanced HTML/CSS, no duplicate IDs, user source labels/counts verified. No JavaScript counter required.
- **NO COMPROBADO:** actual browser rendering/cropping, visual responsive at 375/768/1024/1440px, external asset delivery, accessibility and performance. User visual approval and QA still required before marking About closed.
