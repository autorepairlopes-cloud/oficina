import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../lib/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.lopesautorepair.com";

export const metadata: Metadata = {
  title:
    "Mecânica em Araquari | Lopes Auto Repair - Oficina Mecânica Araquari SC",
  description:
    "Oficina mecânica em Araquari SC. Serviços de mecânica automotiva: revisão, manutenção preventiva, troca de óleo, suspensão, freios e injeção eletrônica. A melhor auto mecânica de Araquari. Agende sua revisão!",
  keywords: [
    "mecânica araquari",
    "auto mecânica araquari",
    "oficina mecânica em araquari",
    "oficina mecânica araquari",
    "mecânico araquari",
    "mecânica araquari sc",
    "oficina araquari",
    "reparo automotivo araquari",
    "manutenção automotiva araquari",
    "troca de óleo araquari",
    "revisão automotiva araquari",
    "mecânica itinga araquari",
    "lopes auto repair",
    "lopes oficina mecânica",
    "mecânica de confiança araquari",
    "serviço automotivo araquari",
  ],
  icons: {
    icon: "/fav.png",
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title:
      "Mecânica em Araquari | Lopes Auto Repair - Oficina Mecânica Araquari SC",
    description:
      "Oficina mecânica em Araquari SC. Serviços completos de mecânica automotiva com qualidade e confiança. Agende sua revisão!",
    url: siteUrl,
    siteName: "Lopes Auto Repair",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: `${siteUrl}/logoLopes.png`,
        width: 800,
        height: 600,
        alt: "Lopes Auto Repair - Oficina Mecânica em Araquari SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mecânica em Araquari | Lopes Auto Repair",
    description:
      "Oficina mecânica em Araquari SC. Serviços completos de mecânica automotiva. Agende sua revisão!",
    images: [`${siteUrl}/logoLopes.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "BR-SC",
    "geo.placename": "Araquari",
    "geo.position": "-26.3725;-48.7214",
    ICBM: "-26.3725, -48.7214",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LanguageProvider initialLocale="pt">{children}</LanguageProvider>
      </body>
    </html>
  );
}
