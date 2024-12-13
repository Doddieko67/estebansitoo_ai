import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig, sharpImageService } from "astro/config";
import config from "./src/config/config.json";
import AutoImport from "astro-auto-import";
import { defineConfig } from 'astro/config';

import { defineConfig } from 'astro/config';

export default defineConfig({
  content: {
    collections: {
      pages: {
        schema: ({ z }) => z.object({
          document_title: z.string(),
          meta_description: z.string(),
          meta_keywords: z.string(),
        }),
      },
      features: {
        schema: ({ z }) => z.object({
          document_title: z.string(),
          meta_description: z.string(),
          meta_keywords: z.string(),
        }),
      },
    },
  },
  site: config.site.base_url ? config.site.base_url : "http://astrotemplatesitey.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler"
        }
      }
    }
  },
  // Image optimization service
  image: {
    service: sharpImageService(),
  },
  integrations: [
    react(),
    sitemap(),
    tailwind(),
    AutoImport({
      // import react components to use in mdx
      imports: [
        "@/components/react/FeatherIcon.tsx",
        "@/components/CounterComponent.astro",
        "@/components/core/Section.astro",
        "@/components/react/Changelog.tsx",
        "@/components/Badge.astro",
        "astro:assets"
      ],
    }),
    mdx()
  ],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    }
  }
});
