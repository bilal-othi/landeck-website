# LanDeck website

The website for [LanDeck](https://bilal-othi.github.io/landeck-website/), a Mac app that finds every device on your
network, tells you what each one is, and warns you when something new or risky turns up. Built with
[Astro](https://astro.build) and published to GitHub Pages. The app itself lives in a separate, private repository
(`landeck`); the app links to this site's privacy (`/privacy/`), support (`/support/`) and Pro (`/#pro`) pages.

## Working on it

```bash
npm install
npm run dev       # http://localhost:4321/landeck-website/
npm run build     # writes dist/
npm run preview   # serves dist/
```

Needs Node.js 22.12 or later.

## Where things are

- `src/site.ts`: name, tagline, download and App Store links, Pro's price, support link. Set `downloadUrl` when the
  first DMG is released, `appStoreUrl` when the app is live and `proPrice` once prices are set; the pages switch from
  "coming soon" by themselves.
- `src/pages/`: the home page, `privacy` (App Store Connect's privacy policy URL) and `support` (its support URL).
- `src/components/`: `Shot` (a screenshot in dark and light, as WebP), `Note` (a macOS notification), `Icon`.
- `src/styles/global.css`: the whole look, and every animation. Visitors who ask for reduced motion get none.
- `src/assets/screenshots/`: the app's screenshots, `<name>-dark.png` and `<name>-light.png`.
- `public/`: the logo (`favicon.svg`, used until the app has its icon), favicon, touch icon and `social.png` (the
  image link previews show).

## Screenshots

They come from the real app, filled with its made-up sample network, so nothing real is shown. In the app repository,
build an unsigned Debug build (not sandboxed, so it can write here) and run it once per appearance:

```bash
xcodebuild build -scheme LanDeck -derivedDataPath build/dd CODE_SIGNING_ALLOWED=NO
open -W -n build/dd/Build/Products/Debug/LanDeck.app --args --sample --pro --appearance dark --screenshots ../website/src/assets/screenshots
open -W -n build/dd/Build/Products/Debug/LanDeck.app --args --sample --pro --appearance dark --router-impersonated --screenshot-set security --screenshots ../website/src/assets/screenshots
open -W -n build/dd/Build/Products/Debug/LanDeck.app --args --sample --pro --appearance dark --address-conflict --screenshot-set security --screenshots ../website/src/assets/screenshots
```

Then the same with `--appearance light`. `--only menubar,settings` takes just those. The window flashes on screen
while it runs. On a Retina screen the images come out at twice the size, which looks sharper on Retina displays.

## Publishing

Every push to `main` builds and deploys the site (`.github/workflows/deploy.yml`). One-time setup: in the repository's
Settings › Pages, set Source to **GitHub Actions**.

Releases of the direct-download DMG are published as GitHub Releases of this repository, so the download link works
while the app's source stays private.

For a custom domain (such as `landeck.app`): set `site` in `astro.config.mjs` to it, remove `base`, add `public/CNAME`
containing the domain, and set the domain in Settings › Pages. The app's links (`AppEnvironment.website`) change too.
