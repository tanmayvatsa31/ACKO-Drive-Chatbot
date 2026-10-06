import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ackoResolveAlias, viteRootDir } from "./vite.shared";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: ackoResolveAlias,
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    open: "/",
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: true,
    open: "/",
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(viteRootDir, "index.html"),
        details: path.resolve(viteRootDir, "details.html"),
      },
    },
  },
});
