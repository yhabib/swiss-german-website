# Swiss German website

The public landing, privacy, and support site for the Swiss German iOS app.

## Local development

```sh
npm install
npm run dev
```

Run `npm run build` before submitting changes. The production output is written
to `dist/`.

## Cloudflare Pages

Connect this repository to a Cloudflare Pages project with:

- Root directory: repository root
- Build command: `npm run build`
- Build output directory: `dist`

Set these environment variables in the Pages project:

| Variable | Purpose |
| --- | --- |
| `PUBLIC_SITE_URL` | Canonical custom domain, including `https://`. Optional while using the default Workers URL. |
| `PUBLIC_APP_STORE_URL` | Full App Store product URL once available |
| `PUBLIC_APP_STORE_ID` | Numeric App Store ID for Apple's Smart App Banner |
| `PUBLIC_SUPPORT_URL` | Optional public support request URL. Never point this to a private repository. |

Until a custom domain is configured, the site falls back to
`https://swiss-german-website.habibfernandez.workers.dev` for canonical,
sitemap, and social metadata.

After the first deployment, enable privacy-first visitor reporting from the
Pages project under **Metrics → Web Analytics → Enable**. Cloudflare injects
its beacon on the next deployment.

## Brand assets

`brand/app-icon-master.svg` is the editable source for the app icon. Its
production PNG exports are shared with the iOS app.
