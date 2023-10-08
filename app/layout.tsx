import "./globals.css";
import "./styles/main.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merchables: Merchandise, Sneakers, Apparel.",
  description:
    "🚀 Join me on Merchables, where sneaker enthusiasts, creative minds, and e-commerce aficionados unite.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
