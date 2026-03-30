import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "../../lib/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lopes Auto Repair",
  description: "Serviços mecânicos de confiança e qualidade. Agende sua revisão hoje mesmo.",
  icons: {
    icon: "/fav.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  // Await the params in newer Next.js versions since they are promises
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'pt';
  const validLang = (lang === 'en' || lang === 'es') ? lang as 'en' | 'es' : 'pt';

  return (
    <html lang={validLang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LanguageProvider initialLocale={validLang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
