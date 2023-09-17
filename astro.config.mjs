import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// import node from "@astrojs/node";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react()],
  output: 'server'
  // adapter: node({
  //   mode: "standalone"
  // })
  ,
  adapter: cloudflare({ mode: "directory" })
});