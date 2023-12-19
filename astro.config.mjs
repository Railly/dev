import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import oneHunterMaterial from "./public/theme/OneHunter-Material-color-theme.json";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: oneHunterMaterial,
    },
  },
});
