//todas las configuraciones de como vamos a customisar nuestro proyecto de astro.

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
    },

  integrations: [mdx()]
});
