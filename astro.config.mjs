import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site =
  process.env.PUBLIC_SITE_URL ||
  process.env.CF_PAGES_URL ||
  "https://swiss-german-website.habibfernandez.workers.dev";

export default defineConfig({
  output: "static",
  site,
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
});
