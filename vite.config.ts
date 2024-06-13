import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        display: "standalone",
        display_override: ["window-controls-overlay"],
        lang: "es-ES",
        name: "Vite + React PWA",
        short_name: "Ejemplo PWA",
        description: "Ejemplo de PWA",
        theme_color: "#19223c",
        background_color: "#d4d4d4",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
      css: "/src/css",
      lib: "/src/lib",
      pages: "/src/pages",
      hooks: "/src/hooks",
      layouts: "/src/layouts",
      routes: "/src/routes",
      contexts: "/src/contexts",
      services: "/src/services",
      components: "/src/components",
    },
  },
  base: "https://entrenaly.vercel.app/",
});
