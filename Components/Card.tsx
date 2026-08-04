import Image from "next/image";

interface CardProps{
    imageSrc: string;
    altText: string;
    description: string;
}

export default function Card({ imageSrc, altText, description }: CardProps) {
  return (
       <div className="group relative w-full h-64 md:h-72 rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 shadow-xl">
      
      {/* 🖼️ FRENTE: Foto do Professor (Esconde no hover) */}
      <div className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* 📝 VERSO: Card Preto com Texto (Aparece no hover) */}
      <div className="absolute inset-0 w-full h-full bg-zinc-950 p-6 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-zinc-800">
        <p className="text-white text-base md:text-lg font-medium leading-relaxed">
          {description}
        </p>
      </div>

    </div> 
    )
}