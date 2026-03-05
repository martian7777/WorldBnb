import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "WorldBNB — Find Your Perfect Stay",
  description: "Discover unique homes, cabins, villas and experiences around the world with WorldBNB.",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
