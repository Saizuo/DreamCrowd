import type { Metadata } from "next";
import "./globals.css";
import NavbarComponent from "@/components/common/NavBar";
import { manrope } from "@/lib/fonts";
import Footer from "@/components/common/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "DreamCrowd",
  description: "DreamCrowd description metatag",
  keywords:
    "DreamCrowd, digital agency, web development, AI solutions, software",
  authors: [{ name: "Vikas Nath Jha" }], // Replace with actual author names
  alternates: {
    canonical: "https://www.canonical.ie/",
  },
  openGraph: {
    url: "https://www.DreamCrowd.com",
    title: "DreamCrowd",
    description:
      "Dreams Meet Heights.",
    siteName: "DreamCrowd",
    images: [
      {
        url: "/images/favico.svg",
        width: 100,
        height: 100,
        alt: "Og Image Alt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DreamCrowd",
    creator: "@DreamCrowd",
    title: "DreamCrowd",
    description:
      "Dreams Meet Heights.",
    images: [
      {
        url: "/images/favico.svg", // Update the path accordingly
        alt: "Og Image Alt",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark antialiased bg-[#030303] relative overflow-x-hidden ${manrope.className}`}
      >
        <NavbarComponent />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
