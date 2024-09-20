import type { Metadata } from "next";

// import font
import { Poppins } from "next/font/google";

// import css
import "./globals.css";

import { Toaster } from "react-hot-toast";

// import components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const url = "https://hungrymeh-website.vercel.app"; // Replace the URL
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  title: "Metabola",
  description:
    " Lorem ipsum dolor sit amet consectetur. Fermentum volutpat egestas interdum bibendum. Urna nibh lectus cursus tortor sagittis fringilla sagittis a. Consequat dolor amet faucibus tincidunt. Consectetur massa integer purus mi risus leo",
  keywords: ["Metabola"],
  openGraph: {
    title: "Metabola",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum volutpat egestas interdum bibendum. Urna nibh lectus cursus tortor sagittis fringilla sagittis a. Consequat dolor amet faucibus tincidunt. Consectetur massa integer purus mi risus leo",
    url,
    type: "website",
    images: [
      {
        url: `${url}/Logo.png`, // Corrected string interpolation
        width: 1200,
        height: 630,
        alt: "Metabola banner",
      },
    ],
    siteName: "Metabola",
  },
  alternates: {
    canonical: url,
  },
  twitter: {
    card: "summary_large_image",
    site: "@hungryMehTwitterHandle", // Replace with VVPS Twitter handle later
    title: "Metabola",
    description:
      "Lorem ipsum dolor sit amet consectetur. Fermentum volutpat egestas interdum bibendum. Urna nibh lectus cursus tortor sagittis fringilla sagittis a. Consequat dolor amet faucibus tincidunt. Consectetur massa integer purus mi risus leo",
    images: [`${url}/Logo.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[4rem]">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
