import React from "react";
import "./globals.css";
import { MotionMount } from "./MotionMount";

export const metadata = {
  title: "Orochia Design System",
  description: "The components of the Orochia applications, in their states, in both themes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen">
        <MotionMount />
        {children}
      </body>
    </html>
  );
}
