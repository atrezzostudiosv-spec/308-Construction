# Home service imagery — client-supplied files (pending binary upload)

This folder is reserved for the six WebP assets supplied by the project owner on 2026-10-26. **The image binaries have NOT been uploaded through the GitHub connector.** Never link to absent files from Home.

| Chapter | Desktop | Mobile |
|---|---|---|
| 01 / Preconstruction Planning | `preconstruction-desktop.webp` | `preconstruction-mobile.webp` |
| 02 / Construction | `construction-desktop.webp` | `construction-mobile.webp` |
| 03 / Construction Management | `management-desktop.webp` | `management-mobile.webp` |

- Desktop sources: 2048 × 1152 WebP. Mobile sources: 941 × 1672 WebP.
- Use the original client-provided bytes; do not replace with unrelated stock photography or invent photo attribution.
- Integrate inside the existing `.chapter-background` for each `[data-scene="1"]`, `[data-scene="2"]`, and `[data-scene="3"]` as a `<picture>` with a mobile `<source media="(max-width:767px)">` and desktop `<img>`. Preserve `.chapter-background-shade`, `.chapter-stage`, `.chapter-copy`, service links, animations and reduced-motion rules.
- Use `object-fit:cover` and inspect the subject's position across 375, 768, 1024 and 1440px.
- Images are illustrative, not evidence of actual 308 Construction jobsites, clients or employees.

**Gate:** upload all six binary WebPs first, verify their GitHub raw URLs, then edit Home. The production preview is deliberately unchanged until this gate passes.
