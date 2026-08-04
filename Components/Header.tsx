import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
let tamanho: number;
tamanho = 40;

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto mt-6 bg-white shadow-xl rounded-xl px-6 py-4 flex items-center justify-between">
            {/* LOGO */}
        <Link href="/" className="text-5xl font-bold text-white">
          <Image
            src="/metal kingdom resumido vermelho cortado.png" // Troque pelo nome do seu arquivo na pasta public
            alt="Guitarra"
            width={tamanho}
            height={tamanho}
            className="object-contain"
            />
        </Link>
        {/* MENU DE LINKS DE ANCORA */}
        <nav className="flex items-center gap-8 font-extrabold text-black uppercase text-base tracking-wider">
          <Link href="#inicio" className="hover:text-red-700 transition-colors">
            INÍCIO
          </Link>

          <Link href="#cursos" className="hover:text-red-700 transition-colors">
            CURSOS
          </Link>

          <a href="#sobre" className="hover:text-red-700 transition-colors">
            SOBRE
          </a>

          <a href="#contato" className="hover:text-red-700 transition-colors">
            CONTATO
          </a>
          {/*BOTAO DE LINK*/}
          <Button
            text="AULAS"
            href="/explorar"
            variant="redNormal"
          />
        </nav>

        </div>

    </header>
  );
}