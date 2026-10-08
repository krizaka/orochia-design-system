import { defineConfig } from "tsup";

/** The library build: ESM + types in dist/, every module marked as a client component. */
export default defineConfig({
  entry: { index: "index.ts", tokens: "tokens/index.ts" },
  format: ["esm"],
  dts: true,
  tsconfig: "tsconfig.lib.json",
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "react/jsx-runtime", "@krizaka/ui", "lucide-react"],
  banner: { js: '"use client";' },
});
