import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bias Language Scanner – Detect Biased Language in Job Descriptions",
  description: "Scan job posts for gender and age bias words that reduce diverse applications. Get instant feedback and inclusive alternatives."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ad8150c3-ae99-4a90-8cd4-746b6d88c322"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
