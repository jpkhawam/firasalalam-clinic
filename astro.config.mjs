import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: "https://firasalalam.clinic",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
    react(),
    astroI18next(),
  ],
});
