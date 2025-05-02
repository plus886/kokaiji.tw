// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  i18n: {
    locales: ["ja", "zh-tw"],
    defaultLocale: "ja",
  },
});
