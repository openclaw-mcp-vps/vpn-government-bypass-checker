import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VPN Government Bypass Checker",
  description: "Test VPN effectiveness against government blocks. Get real-time bypass scores and recommended configurations for your country."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="166c2384-5ab3-4738-a7db-5d8aca3c4fde"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
