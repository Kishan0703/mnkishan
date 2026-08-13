import type { Metadata } from "next";
import { gochi, splash, bree, meddon } from "@/lib/fonts";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import ClickSpark from "@/components/ui/ClickSpark";
import { COLORS } from "@/lib/colors";
import { Toaster } from "sonner";
import { LoadingProvider } from "@/context/LoadingContext";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const siteUrl = "https://www.kishanmn.dev/";
const siteTitle = "Kishan MN | Software Engineer Portfolio";
const siteDescription =
  "Portfolio of Kishan MN, a software engineer building AI tools, machine learning systems, full-stack products, analytics platforms, and blockchain infrastructure.";
const siteImage = "/images/homepage-og.png";
const sameAs = [
  "https://github.com/Kishan0703/",
  "https://www.linkedin.com/in/kishan-mn-898b67334",
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kishan MN",
    url: siteUrl,
    image: `${siteUrl}images/homepage-og.png`,
    sameAs,
    jobTitle: "Software Engineer",
    knowsAbout: [
      "AI tools",
      "Machine learning",
      "Full-stack development",
      "Analytics systems",
      "Blockchain infrastructure",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kishan MN Portfolio",
    url: siteUrl,
    description: siteDescription,
    author: {
      "@type": "Person",
      name: "Kishan MN",
      url: siteUrl,
    },
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Kishan MN",
  },
  description: siteDescription,
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Kishan MN Portfolio",
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: "Kishan MN portfolio homepage",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: siteImage,
        alt: "Kishan MN portfolio homepage",
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
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", geist.variable)}
    >
      <body
        className={`flex min-h-full flex-col ${meddon.variable} ${gochi.variable} ${splash.variable} ${bree.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Toaster position="bottom-right" theme="dark" richColors />
        <LoadingProvider>
          <ClickSpark
            sparkColor={COLORS.secondary}
            sparkSize={12}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            {children}
          </ClickSpark>
        </LoadingProvider>
      </body>
    </html>
  );
}
