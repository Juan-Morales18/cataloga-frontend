import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Cataloga - Bazar de productos naturales y estilo",
  description:
    "Descubre nuestro bazar con una cuidada selección de sandalias, cremas corporales, ropa y productos de cuidado natural. Todo lo que necesitas para tu bienestar y estilo en un solo lugar.",
  keywords:
    "bazar, productos naturales, sandalias, cremas corporales, ropa, cuidado natural, bienestar, estilo, productos orgánicos, cosmética natural",
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
      <body className={`${poppins.className} antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
