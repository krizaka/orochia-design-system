import React from "react";
import "./globals.css";

export const metadata = {
  title: "Orochia Design System — Obsidian Velvet Noir & Cyber-Sensual Luxury",
  description: "Official UI Component Library and Design Tokens for Orochia and Krizaka Creator Ecosystem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#060709] text-white selection:bg-violet-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
