import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react(), svgr()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/components/__tests__/setup.js",
    coverage: {
      reporter: ["text", "json", "html"],
      thresholds: {
        lines: 80,
        functions: 65,
        branches: 65,
        statements: 80,
      },
      exclude: [
        "src/features/auth/utils",
        "src/routeTree.gen.ts",
        "**/node_modules/**",
        "**/dist/**",
        "**/api/**",
        "**/.{idea,git,cache,output,temp}/**",
        "**/**.config.{ts,js,cjs,tsx}",
        "**.cjs",
        "**/main.jsx",
        "**/constants/**",
        "**/routes/**",
        "**/store/**",
        "**/lib/**",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
