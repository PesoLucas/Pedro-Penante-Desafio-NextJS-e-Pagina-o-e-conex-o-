import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

let tamanho: number;
tamanho = 40;

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 z-50 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto mt-3 sm:mt-6 bg-white shadow-xl rounded-xl px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between overflow-hidden">
        
        {/* logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/metal kingdom resumido vermelho cortado.png"
            alt="Guitarra"
            width={tamanho}
            height={tamanho}
            className="object-contain"
          />
        </Link>

        {/* texto do header */}
        <nav className="flex items-center gap-1.5 sm:gap-4 md:gap-8 font-extrabold text-black uppercase text-[10px] min-[400px]:text-xs sm:text-sm md:text-base tracking-normal sm:tracking-wider">
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

          {/* botao do header */}
          <div className="shrink-0">
            <Button
              text="AULAS"
              href="/explorar"
              variant="redNormal"
            />
          </div>
        </nav>

      </div>
    </header>
  );
}