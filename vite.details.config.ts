import type { Plugin } from "vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ackoResolveAlias } from "./vite.shared";

/** Serve the details HTML at http://localhost:5174/ (root). */
function detailsRootPlugin(): Plugin {
  return {
    name: "details-root",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url?.split("?")[0] ?? "";
        if (url === "/" || url === "/index.html") {
          req.url = "/details.html";
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), react(), detailsRootPlugin()],
  resolve: {
    alias: ackoResolveAlias,
  },
  server: {
    host: true,
    port: 5174,
    strictPort: true,
    open: "/",
  },
  preview: {
    host: true,
    port: 4174,
    strictPort: true,
    open: "/",
  },
});
