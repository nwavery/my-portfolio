import type { Metadata } from "next";
import "./globals.css"; // Import global styles

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A fresh start for my personal portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 