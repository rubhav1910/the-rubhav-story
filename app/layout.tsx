import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import BackgroundMusic from "./components/BackgroundMusic"; // Background music component import kiya

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "The Rubhav Story | Vaibhav & Ruchita",
  description: "Official Wedding Website of Vaibhav & Ruchita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {/* Background Music Player jo puri website par chalega */}
        <BackgroundMusic />
        
        {children}
      </body>
    </html>
  );
}