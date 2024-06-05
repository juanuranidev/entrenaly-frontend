import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Entrenaly",
        short_name: "Entrenaly",
        icons: [
          {
            src: "/logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        start_url: "/",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
        description: "Una aplicación de entrenamiento personal",
        lang: "es-AR",
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
