import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import oneHunterThemeVercelLight2024 from "./public/theme/one-hunter-vercel-light.json";
import oneHunterThemeVercelDark2024 from "./public/theme/one-hunter-vercel-dark.json";

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: oneHunterThemeVercelLight2024,
        dark: oneHunterThemeVercelDark2024,
      },
      defaultColor: "light",
      cssVariablePrefix: "--shiki-",
      langs: [],
      transformers: [
        {
          line(node, line) {
            node.properties["data-line"] = line;
            this.addClassToHast(node, "line");
          },
        },
      ],
    },
  },
});
