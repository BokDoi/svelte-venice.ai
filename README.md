# svelte-venice.ai

Minimal Svelte + Vite starter with TypeScript and prebuilt Tailwind CSS (CLI, no runtime Tailwind PostCSS plugin).

Quick start (Windows cmd.exe):

```cmd
cd /d "c:\Users\Seth\VSCodeProjects\svelte-venice.ai"
npm install
npm run dev
```

Available scripts:

- `npm run dev` — start dev server (Vite)
- `npm run build` — production build
- `npm run preview` — preview built site
- `npm run lint` — run ESLint
- `npm run format` — run Prettier
 - `npm run build:tailwind` — one-off build of `tailwind.css` from `src/tailwind.input.css`
 - `npm run tailwind:watch` — watch & rebuild `tailwind.css` during development

Tailwind usage:

The app links the generated `tailwind.css` directly in `index.html`. The file `src/styles.css` contains only plain global CSS to avoid requiring the Tailwind PostCSS plugin at runtime.

To regenerate the utility bundle after editing `src/tailwind.input.css` or adding classes in Svelte components:

```cmd
npm run build:tailwind
```

For continuous rebuild while you work:

```cmd
npm run tailwind:watch
```

Note: Replace `YOUR_API_KEY` in `src/App.svelte` with a real Venice AI key for API calls.
