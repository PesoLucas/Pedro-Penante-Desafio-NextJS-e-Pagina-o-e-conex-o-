import Image from "next/image";

interface QuadradoProps {
  imageSrc: string;
  altText: string;
  title: string;
  subtitle?: string; // Opcional, caso queira quebrar em 2 linhas
}

export default function Quadrado({ imageSrc, altText, title, subtitle }: QuadradoProps) {
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white">
      {/* ÍCONE VERMELHO */}
      <div className="w-16 h-16 relative mb-4 flex items-center justify-center">
        <Image 
          src={imageSrc} 
          alt={altText} 
          width={64} 
          height={64} 
          className="object-contain" 
        />
      </div>

      {/* TEXTO EM NEGRITO / CAIXA ALTA */}
      <p className="text-black font-extrabold text-xl md:text-2xl uppercase leading-snug">
        {title}
        {subtitle && (
          <>
            <br />
            {subtitle}
          </>
        )}
      </p>
    </div>
  );
}