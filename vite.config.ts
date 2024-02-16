import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      css: "/src/css",
      lib: "/src/lib",
      pages: "/src/pages",
      layout: "/src/layout",
      routes: "/src/routes",
      components: "/src/components",
    },
  },
});
