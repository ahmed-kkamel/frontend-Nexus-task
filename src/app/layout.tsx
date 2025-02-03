import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Finder",
  description: "Discover and explore movies with the Movie Finder app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
