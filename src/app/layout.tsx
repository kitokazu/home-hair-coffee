import type { Metadata } from "next";
import { Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "home — hair & coffee roaster",
  description:
    "美容師&珈琲焙煎士してます。香川県さぬき市志度にある、ヘアサロンとコーヒー焙煎所。",
  keywords: [
    "home",
    "hair salon",
    "coffee roaster",
    "さぬき市",
    "香川県",
    "美容室",
    "珈琲焙煎",
    "アームズ珈琲",
  ],
  openGraph: {
    title: "home — hair & coffee roaster",
    description: "美容師&珈琲焙煎士してます",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${notoSans.variable} ${cormorant.variable} antialiased`}
        style={{ fontFamily: "var(--font-noto-sans), 'Hiragino Sans', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
