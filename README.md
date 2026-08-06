# ACKO Drive splash (Figma → ACKO DS)

Implementation of **Splash Screen Iteration 1 Variant 37** from the [ACKO Drive ↔ ACKO App Figma file](https://www.figma.com/design/oFjLLGAd9RctdD4ql2hOn2/ACKO-Drive-%3C%3E-ACKO-App?node-id=15979-5909).

## Local preview

Two servers are available:

| Command | URL | What you see |
|---------|-----|--------------|
| `npm run dev` | http://localhost:5173/ | React splash screens with preview tabs |
| `npm run mockup` | http://127.0.0.1:4173/mockup.html | Static splash only |

Install and run:

```bash
cd /Users/tanmay.vatsa/acko-drive-splash
npm install --registry https://registry.npmjs.org
npm run dev          # terminal 1
npm run mockup       # terminal 2 (optional)
```

**Note:** `@acko/*` packages from Nexus are optional for this preview. Vite aliases `@acko/button` and `@acko/typography` to local preview stubs. Restore full ACKO packages from Nexus when integrating into production.

## Structure

- `src/screens/AckoDriveSplashScreen.tsx` — screen UI (`@acko/button`, `@acko/typography`, semantic tokens)
- `public/assets/acko-drive-splash/` — exported Figma imagery (photos, logo, arrows, glow)
- `src/App.tsx` — renders the splash for local preview

Wire `onClose` and `onFindNearbyCentre` to your app navigation when embedding this screen.
