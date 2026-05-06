import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'BB Restaurant & Cafe - Fresh Flavors Daily',
  description: 'Experience culinary excellence at BB Restaurant & Cafe. Serving artisanal coffee, fresh brunch, and gourmet dinners in a cozy, welcoming atmosphere.',
  openGraph: {
    "title": "BB Restaurant & Cafe",
    "description": "Fresh, locally sourced food in a beautiful setting.",
    "type": "website",
    "siteName": "BB Restaurant & Cafe"
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
