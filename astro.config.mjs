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
    sitemap(
      {
        i18n: {
          defaultLocale: "en",
          locales: {
            en: "en-US",
            ar: "ar-LB",
          },
        },
      },
      {
        filter: (page) =>
          page !== "https://firasalalam.clinic/thanks" &&
          page !== "https://firasalalam.clinic/404",
      }
    ),
    react(),
    astroI18next(),
  ],
});
