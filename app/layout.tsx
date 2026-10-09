import "./globals.css";

import { ThemeProvider, ThemeScript } from "@krizaka/ui/theme";
import React from "react";

import { MotionMount } from "./MotionMount";

export const metadata = {
  title: "Orochia Design System",
  description: "The Orochia identity on the Krizaka platform: the theme, the composites and the primitives, in both themes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>
          <MotionMount />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
