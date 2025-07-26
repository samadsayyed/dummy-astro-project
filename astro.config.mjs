// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bablon.in/',
  integrations: [
    react(),
    mdx(),
    sitemap()
  ],
  vite: {
    plugins: [tailwind()],
    optimizeDeps: {
      include: ['lucide-react']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'lucide': ['lucide-react'],
            'shop': [
              './src/components/FilterSidebar.jsx',
              './src/components/Pagination.jsx',
              './src/components/ProductSort.jsx',
              './src/components/ShopContainer.jsx',
              './src/components/ProductCardWrapper.jsx'
            ]
          }
        }
      }
    }
  },
  image: {
    domains: ['placehold.co'],
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      }
    }
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});