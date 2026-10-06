import path from "node:path";
import type { Plugin } from "vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ackoResolveAlias, viteRootDir } from "./vite.shared";

function detailsPathPlugin(): Plugin {
  return {
    name: "details-path",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url?.split("?")[0] ?? "";
        if (url === "/details" || url === "/details/") {
          req.url = "/details.html";
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), react(), detailsPathPlugin()],
  resolve: {
    alias: ackoResolveAlias,
  },
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: false,
    open: "/",
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: false,
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
