import { defineConfig } from "tsup";

/** The library build: ESM + types in dist/, every module marked as a client component. */
export default defineConfig({
  entry: { index: "index.ts", tokens: "tokens/index.ts" },
  format: ["esm", "cjs"],
  dts: true,
  tsconfig: "tsconfig.lib.json",
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "react/jsx-runtime"],
  banner: { js: '"use client";' },
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
