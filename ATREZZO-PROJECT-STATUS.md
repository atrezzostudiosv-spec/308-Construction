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
| Inner-page redesign | IN PROCESS | Services rebuilt with three image-led architectural scenes, anchored sections and related projects; Projects, details, About, Careers and Contact pending |
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
