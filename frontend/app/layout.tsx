import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeInit } from "@/components/shared/ThemeInit";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barangay Sala | Barangay Management System",
  description:
    "Official website of Barangay Sala. Services, news, announcements, and contact information for residents and visitors.",
  openGraph: {
    title: "Barangay Sala | Barangay Management System",
    description:
      "Official website of Barangay Sala. Services, news, announcements, and contact.",
    type: "website",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} font-sans bg-zinc-50 text-zinc-900 dark:bg-neutral-900 dark:text-zinc-50 antialiased`}
      >
        <ThemeInit />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
