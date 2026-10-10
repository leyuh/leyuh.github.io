# leyuh.github.io

Redirects only (no app code). Pure Prep moved from GitHub Pages to https://app.pureprep.app (Cloudflare Pages) on Oct 10, 2026.

- `pure-prep/` and `pure-prep-redesign/`: "Pure Prep has moved" pages that send visitors to https://app.pureprep.app/. If the browser has a Pure Prep save on leyuh.github.io (`localStorage` keys `purePrepStateV2` / `purePrepState`), it is passed along as `#pp-import=<base64url JSON {key: raw string}>`; the app imports it only when app.pureprep.app has no save yet. Logic in `pp-move.js`.
- `404.html`: deep links under `/pure-prep/` or `/pure-prep-redesign/` (e.g. `privacy.html`) do the same; anything else shows a plain not-found page.
- No-JS fallback: `<noscript>` meta refresh plus a visible link.
