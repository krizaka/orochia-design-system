import { defineConfig } from "tsup";

const shared = {
  format: ["esm" as const],
  dts: true,
  tsconfig: "tsconfig.lib.json",
  sourcemap: true,
  external: ["react", "react-dom", "react/jsx-runtime", /^@krizaka\//, "lucide-react", "tailwind-variants"],
};

/**
 * Two builds: the components (every module a client component) and the plain modules — class helpers and tokens —
 * that server components can call.
 */
export default defineConfig([
  { ...shared, entry: { index: "index.ts" }, clean: true, banner: { js: '"use client";' } },
  { ...shared, entry: { classes: "classes.ts", tokens: "tokens/index.ts" }, clean: false },
]);
