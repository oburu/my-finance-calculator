import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setupTests.ts",
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      reportsDirectory: "./.coverage",
      exclude: [
        "node_modules/",
        "src/setupTests.ts",
        "src/main.tsx",
        "**/*.d.ts",
        "**/*.config.ts",
        "**/*.config.js",
        "**/**/types/*",
      ],
    },
  },
});
