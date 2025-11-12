// Minimal PostCSS config (ESM) used by Vite. Tailwind is not run via PostCSS at runtime.
// We prebuild tailwind.css with the Tailwind CLI instead.
export default {
  plugins: {
    autoprefixer: {},
  },
}
