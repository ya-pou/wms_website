import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WebMate Services - Accueil",
  description: "Agence web à Amiens : création de sites vitrines, outils métier et automatisations pour PME. WebMate Services développe des solutions performantes et sur mesure."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Backgrounds */}
        <div className="fixed inset-0 -z-20 bg-gradient-main"></div>
        <div className="fixed inset-0 -z-10 bg-pattern"></div>

        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
