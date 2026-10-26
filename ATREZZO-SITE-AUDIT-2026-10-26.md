# ATREZZO — 308 Construction full-site source audit
**Date:** 2026-10-26
**Scope:** 11 single-document client-side views on GitHub Pages.
**Site type:** Independent, unofficial web design preview — not a client-approved production publication.

## Verified in GitHub source
- Eleven distinct SPA views: home, services, projects, unt, twu, plano, mep, about, careers, contact, policy.
- One H1 in each view; 92 unique DOM IDs, zero duplicates.
- Internal `navigateTo()` references resolve to known view IDs.
- Local photo, script and stylesheet references resolve to existing GitHub files (including the new Services intro WebP and six Home WebPs).
- All in-page `#anchor` targets resolve to existing element IDs; no unresolved local `srcset` paths.
- All navigation anchors formerly using `href="#"` now provide page-specific href fallback.
- Desktop Projects dropdown no longer has `margin-top: 0.5rem` hover gap; CSS explicitly supports hover, focus-within, and button toggle state. Escape and outside-click closing logic added.
- Mobile-menu expanded state, Escape closing and background scroll locking added.
- 11 per-route browser titles/descriptions and dynamic canonical, Open Graph and Twitter title/description/url tags configured; static Open Graph/Twitter image tags are present in HTML.
- OG default image points to a Pexels JPEG crop (1200 × 630 specified), representing illustrative construction imagery, not actual 308 work.
- Favicon at `assets/favicon.svg`; stylesheet/script query version `20261026-site-audit-01`.
- JavaScript parses successfully using a static JS compilation check; CSS braces are balanced.
- New contact form endpoint is `https://formsubmit.co/ajax/atrezzostudiosv@gmail.com` with an HTML POST fallback. Clear notice states that independent-demo enquiries go to Atrezzo, not 308 Construction.
- Application upload form remains disabled for transport until receiving authorization and privacy requirements are established. Files are not transmitted by demo code.
- Motion reveals added conservatively to interior pages with reduced-motion protection and an IntersectionObserver fallback.

## SEO architecture / publication constraints
- `noindex, follow` remains by design because the demo is unofficial; indexing it as 308 Construction's official website would be misleading.
- This is **one HTML document with query-string SPA routes**. Although browser navigation updates titles/descriptions, social crawlers and many search bots usually read the original HTML rather than executing JavaScript. Shared `?view=...` pages therefore generally receive the default Home OG preview. For independent SEO of every page, build a true static multi-page site or server-side pre-rendered routes after company approval.
- Company schema or official business profiles were not injected into this unofficial demo.
- The Privacy Policy remains explicitly a **reference draft**, not an adopted legal policy.

## Still unverified / blocked
1. **Contact form: IN VALIDATION.** FormSubmit receiver must be activated with a first test submission and confirmation link sent to `atrezzostudiosv@gmail.com`; actual inbox delivery must be verified. An HTTP success is not proof of inbox receipt.
2. **Careers form: BLOCKED.** Employer authorization, secure attachment handling, recipient, retention, privacy and company-approved policy absent. No applicant resumes should silently route to a designer's inbox.
3. **Browser/visual QA: NOT CHECKED in current execution.** The available read-only browser context cannot refresh/interact with the remote site; independent live tests required on desktop at 1440 and 1024px, tablet at 768px and phone at 375px. Verify dropdown hover path, touch clicks, visual reveal smoothness and photo crops.
4. **Network/performance: NOT CHECKED.** Production PageSpeed, WCAG 2.2 AA, media HTTP success, runtime console, Share Debugger and actual form delivery require dedicated live tests.
5. **Third-party resource dependence:** Tailwind CDN, Lucide, Google Fonts, Pexels and Wix-hosted logo remain. Removing runtime Tailwind requires an independent build process and regression QA; this was not improvised during a targeted site-fix pass.
6. **External links:** Google Maps and official `mailto:`/`tel:` targets are syntactically valid; full remote click-through or uptime checks not proven. Do not claim that every external link was tested.

## Acceptance process
- Confirm FormSubmit first-use activation and receipt to Atrezzo.
- Test manual dropdown mouse traversal, keyboard, touch and Escape.
- Validate OG sharing with Facebook/LinkedIn/WhatsApp after redeployment/cache refresh.
- Run width-specific QA and PageSpeed; record proof before marking the demo technically closed.
- Secure official 308 Construction permission before enabling actual career recruitment or publishing the site as official.
