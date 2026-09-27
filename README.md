# otp-relay-web

Marketing and privacy site for OTP Relay. Two pages: `/` explains what the app
does, `/privacy` is the privacy policy (the URL the Chrome Web Store and Play
Store listings point at).

```sh
npm install
npm run dev       # http://localhost:4620
npm run build     # type-checks, then writes dist/
```

Every retention figure the privacy page quotes lives in `src/policy.ts`. Change
the number there and the prose updates.

Routing is a tiny pathname router (`src/router.tsx`), not a library. Because
`/privacy` is a real path, the host must serve `index.html` for unknown paths
(SPA fallback). Netlify, Vercel, and Cloudflare Pages do this with one config
line; for a plain static bucket, copy `dist/index.html` to `dist/privacy/index.html`.
