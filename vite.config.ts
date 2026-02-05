import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Copy public files to dist
    copyPublicDir: true,
    rollupOptions: {
      output: {
        // Preserve filenames for robots.txt and sitemap.xml
        manualChunks: undefined
      }
    }
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  // Ensure public directory is served correctly
  publicDir: "public"
});
