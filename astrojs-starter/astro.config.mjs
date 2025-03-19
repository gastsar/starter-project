// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
import { SITE } from "./src/config";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    sitemap(),
    react(),
    sanity({
      projectId: "jex1s6ez",
      dataset: "production",
      useCdn: false,
    }),
  ],
  output: "server",
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});
