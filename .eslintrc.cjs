module.exports = {
  root: true,
  env: { node: true, browser: true, es2021: true },
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["**/*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: {
          ts: "@typescript-eslint/parser"
        }
      },
      plugins: ["svelte"],
      rules: {}
    },
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      rules: {}
    },
    {
      files: ["postcss.config.js", "tailwind.config.js"],
      parserOptions: { sourceType: "module" }
    }
  ]
};
