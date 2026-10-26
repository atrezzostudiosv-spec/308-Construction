# ATREZZO — 308 Construction — Home QA

Date: 2026-10-26  
Scope: **Home only** — hero, introduction, three Services chapters, four-tile Portfolio, client list, final CTA, global header/footer and navigation.  
Status: **IN VALIDATION** — source-code checks passed; live-browser visual/interaction checks remain open.  
Source of truth: current `main` branch, `index.html`, `assets/css/styles.css`, `assets/js/app.js`, `MEDIA-SOURCES.md`.

## Verified in repository (not a live-device test)

- [x] Exactly 10 `page-*` views and one `h1` in each route section. No duplicate HTML IDs found.
- [x] All `navigateTo(...)` route references map to existing page sections.
- [x] Home sections present in order: hero, intro, three Services scenes, Portfolio, publicly listed clients, closing CTA.
- [x] Three Services scenes preserve text/backgrounds/CTA links to the Services view.
- [x] Four Portfolio tiles: featured UNT Matthews Hall; TWU Old Main; Plano ISD Bleachers; MEP Projects. All link to existing detail views.
- [x] Image overlays contain the project label, real sourced project title, published description, and a View Project call-to-action.
- [x] The Home Portfolio contains one discreet illustration notice (photos are **not** actual project photography). The footer identifies this as an independent design concept; preview forms explicitly do not send.
- [x] Responsive CSS includes phone, tablet and desktop gallery layouts; Home Services has small-screen motion and reduced-motion fallbacks.
- [x] No mismatched `<div>` or `<section>` counts; CSS brace counts match; JavaScript parses successfully.
- [x] Known fixed-color examples checked mathematically: teal #116B76 on light #F3F2EF = 5.54:1; white on #172126 = 16.38:1; Portfolio accent #B1F3ED on #172126 = 13.19:1; hero teal #38A8B3 on #151A1D = 6.20:1. **These calculations are not a full WCAG contrast audit**, because photo backgrounds vary.
- [x] Pexels source listings are reachable for all four Portfolio category images and the Hero construction video (Pexels ids: 36363659, 31398713, 14663065, 38217230; video 853867).

## Device-viewport test matrix

CSS coverage exists, but **none of these viewports was visually rendered or clicked during this run**.

| Width | Intended | Live visual status |
| --- | --- | --- |
| 375px | Single-column Portfolio; service chapters with touch-friendly CTAs; no horizontal overflow | NO COMPROBADO |
| 768px | Tablet gallery reflow, one featured + secondary row; Services scroll effects | NO COMPROBADO |
| 1024px | Desktop/tablet transition, compact headings; sticky scenes and clickable CTA | NO COMPROBADO |
| 1440px | Full desktop editorial Portfolio (lead tile + 3 right), Hero video, Services transitions | NO COMPROBADO |

## Remaining live acceptance checks

1. At 375/768/1024/1440px, record a screenshot of Hero, service transition, full Portfolio, clients and footer; verify text clipping, spacing, image positioning and **absence of horizontal scroll**.
2. Click **Explore Projects**, **Discuss Your Project**, each **Examine Service**, **View All Projects**, all four Portfolio cards, mobile navigation, tel/mail links and ASK 308 launcher.
3. Scroll forward **and backward** through the pinned Home Services on touch and desktop. Confirm subtle image zoom, next-scene overlay, reliable exit to Portfolio and no button hit-test interference.
4. Check video actually plays on desktop and static fallback appears on mobile, reduced-motion and Save-Data settings. Verify image requests, including their srcset variants, return valid media.
5. Review mobile Portfolio titles and descriptions against real photographs, keyboard focus and screen-reader reading order.
6. Only after this live verification, test accessibility (target WCAG 2.2 AA), console warnings and PageSpeed/network delivery. This run **did not** measure speed or accessibility in an actual browser.

## Decision and handoff

- **Approved visual direction**: preserve cinematic Hero, scroll-connected Services and editorial Portfolio.
- **No new design changes recommended on the strength of static checks.** Do not repeat closed creative work.
- **QA remains EN VALIDACIÓN** until real browser screenshots, interactions and media playback confirm the above points.
- The web site could not be reached by the available remote rendering/testing tools during this check. Source and original Pexels listings could be inspected, but this does not count as published-site UI testing.
