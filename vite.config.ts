import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/learn/series65/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icon-192.png', 'icon-512.png', 'icon.svg'],
      manifest: {
        name: 'Series 65 Study Hub',
        short_name: 'Series 65',
        description: 'Free, open-source Series 65 exam prep with a CFP intro track',
        theme_color: '#2563eb',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/learn/series65/',
        start_url: '/learn/series65/',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        navigateFallback: '/learn/series65/index.html',
        navigateFallbackDenylist: [/^\/api/],
        // The whole curriculum and question bank ship inline so the app works
        // offline. That is well past workbox's 2 MiB default per-file cap.
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
      },
    }),
  ],
  build: {
    // Content dwarfs application code here, so keep it in its own chunks.
    // A curriculum edit then invalidates only that chunk for returning users
    // instead of forcing a re-download of the entire bundle.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/src/data/topics/')) return 'curriculum';
          if (id.includes('/src/data/questions/')) return 'questions';
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
    chunkSizeWarningLimit: 3000,
  },
});
