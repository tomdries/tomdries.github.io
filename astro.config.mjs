import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // site: 'https://astrofy-template.netlify.app',
  site: 'https://tomdries.github.io',
  // base: '/homepage2',
  integrations: [mdx(), sitemap(), tailwind()]
});
