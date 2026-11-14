# Yoga With Karuna — website

One-page website for **Yoga With Karuna**, live online yoga classes for women.
Built with [Astro](https://astro.build) and Tailwind CSS 4. It's a static site with no backend; every booking button opens WhatsApp with a pre-filled message.

## Run it locally

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
npm run preview    # serve the production build
```

Requires Node 22.12 or newer.

## Where to change things

| What | Where |
|---|---|
| All text, class timings, phone, email, FAQ, reviews | `src/config/site-content.ts` |
| Brand colours and fonts | `src/styles/global.css` (`@theme` block) |
| Sections | `src/components/sections/` |
| Logo and photos | `src/assets/` (optimised automatically at build time) |
| Class card photos and look | `src/assets/classes/` · `classCardStyle` in `site-content.ts` (`'photo'` or `'light'`) |
| About facts layout | `aboutHighlightStyle` in `site-content.ts` (`'columns'`, `'tiles'` or `'strip'`) |
| Link-preview image for WhatsApp/Facebook | `public/og-image.jpg` (1200×630) |
| Production URL (canonical, sitemap) | `astro.config.mjs` → `site`, plus `public/robots.txt` and `public/sitemap.xml` |

### Adding Karuna's photos

1. Put the photo in `src/assets/`, e.g. `src/assets/karuna.jpg`.
2. In `src/config/site-content.ts`, add `import karuna from '../assets/karuna.jpg';` at the top and set `instructor.photo: karuna`.
3. For a photo strip in the About section, add entries to `gallery`: `{ src: importedImage, alt: 'Karuna teaching a class' }`.

## Deployment

Vercel builds the `main` branch automatically (framework preset: Astro). Security headers live in `vercel.json`.
The original content brief is kept in `docs/` (not published).

## Photo credits

The three class photos are from Pexels under the free Pexels licence (commercial use allowed, no credit required): photos 29720736, 8076106 and 4498220 on pexels.com. Swap in Karuna's own photos when available.
