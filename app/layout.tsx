import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Cataloga - Tu catálogo digital local",
  description:
    "Deja de buscar entre innumerables mensajes de WhatsApp. Cataloga centraliza todos los productos, novedades y ofertas que necesitas en un solo lugar. Descubre las mejores ofertas locales de forma fácil y rápida.",
  keywords:
    "catálogo digital, productos locales, ofertas, novedades, compras online, tienda local",
  authors: [{ name: "Cataloga" }],
  creator: "Cataloga",
  publisher: "Cataloga",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="relative p-8 min-h-screen overflow-hidden bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-600 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

          {children}
        </div>
      </body>
    </html>
  );
}
