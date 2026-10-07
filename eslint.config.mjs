import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  { ignores: [".next/**", "dist/**", "next-env.d.ts"] },
  { rules: { "@next/next/no-img-element": "off" } },
];

export default config;
