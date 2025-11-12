// Minimal PostCSS config: only autoprefixer. We avoid requiring
// `@tailwindcss/postcss` here because that package isn't available
// in this environment. Using the CDN for Tailwind in development
// avoids the PostCSS plugin requirement.
/* eslint-env node */
module.exports = {
	plugins: {
		// keep autoprefixer in case other PostCSS features are used
		autoprefixer: {}
	}
};
