import { defineConfig } from "vitest/config";

export default defineConfig({
  oxc: { jsx: { runtime: "automatic" } },
  test: { include: ["components/**/*.test.tsx"], environment: "node" },
});
