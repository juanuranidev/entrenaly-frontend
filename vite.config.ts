import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      components: "/src/components",
      layout: "/src/layout",
      routes: "/src/routes",
      pages: "/src/pages",
      css: "/src/css",
    },
  },
});
