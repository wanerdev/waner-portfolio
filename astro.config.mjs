import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "server",
  /*adapter: node({
    mode: "standalone",
  }),*/
  adapter:vercel(),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
