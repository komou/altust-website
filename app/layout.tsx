import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AltÜst — Türkiye'nin Modern Ön Muhasebe Yazılımı",
  description: "KOBİ'ler için tasarlanmış bulut tabanlı ön muhasebe, finans yönetimi ve e-belge platformu.",
  keywords: "ön muhasebe, muhasebe yazılımı, e-fatura, cari hesap, stok takibi, KOBİ, bulut muhasebe",
  openGraph: {
    title: "AltÜst — Türkiye'nin Modern Ön Muhasebe Yazılımı",
    description: "KOBİ'ler için tasarlanmış bulut tabanlı ön muhasebe ve finans yönetimi platformu.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
