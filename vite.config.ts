import path from "node:path";
import type { Plugin } from "vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ackoResolveAlias, viteRootDir } from "./vite.shared";

function logDevUrls(port: number): Plugin {
  return {
    name: "log-dev-urls",
    configureServer(server) {
      server.httpServer?.once("listening", () => {
        console.log("\n  ACKO Drive — Kia Seltos details (Figma 17346:15109)\n");
        console.log(`  → http://127.0.0.1:${port}/`);
        console.log(`  → http://localhost:${port}/\n`);
        console.log("  Keep this terminal open while viewing in the browser.\n");
      });
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), react(), logDevUrls(5173)],
  resolve: {
    alias: ackoResolveAlias,
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: false,
    open: "/",
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: false,
    open: "/",
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(viteRootDir, "index.html"),
        splash: path.resolve(viteRootDir, "splash.html"),
      },
    },
  },
});
