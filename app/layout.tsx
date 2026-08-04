import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // 1. Importamos a fonte do Google
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

// 2. Configuramos os pesos (weights) e subconjuntos que vamos usar no projeto
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MetalKingdom",
  description: "A melhor escola de música da América Latina",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* 3. Aplicamos a classe poppins.className no <body> */}
      <body className={`${poppins.className} antialiased bg-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}