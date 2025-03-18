import type { Metadata } from "next";
import { Inter, Cormorant, Cormorant_Unicase } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wedding Venue",
  description: "Your perfect wedding venue",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vbe8vjq.css" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
