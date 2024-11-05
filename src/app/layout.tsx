import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Página de destino à inicialização da IA",
  description: "Uma página de destino para uma startup de IA criada com a tribo frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={twMerge(inter.className, 'bg-black text-white atialised')}>{children}</body>
    </html>
  );
}
