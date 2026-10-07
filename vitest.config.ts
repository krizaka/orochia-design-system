import { defineConfig } from "vitest/config";

export default defineConfig({
  esbuild: { jsx: "automatic" },
  test: { include: ["components/**/*.test.tsx"], environment: "node" },
});
