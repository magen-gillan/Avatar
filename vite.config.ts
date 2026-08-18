/* Ink Console project build config: client is the Vite root; GitHub Pages uses the repository subpath. */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: "client",
  base: process.env.GITHUB_PAGES === "true" ? "/Avatar/" : "/",
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(projectRoot, "client/src") },
  },
  build: {
    outDir: "../dist/public",
    emptyOutDir: true,
  },
});
