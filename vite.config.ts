import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        display: "standalone",
        display_override: ["window-controls-overlay"],
        lang: "es-ES",
        name: "Entrenaly",
        short_name: "Entrenaly",
        description: "Tus herramientas de trabajo en un solo lugar.",
        theme_color: "#376EFF",
        background_color: "#ffffff",
        icons: [
          {
            src: "entrenaly-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "entrenaly-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "entrenaly-512x512.png",
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
});
