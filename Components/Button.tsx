import Link from "next/link";

// 1. Definimos os 3 tipos exatos que você especificou
interface ButtonProps {
  text: string;                             // Texto do botão
  href?: string;                            // Link/Caminho (Opcional)
  variant?: "heroGray" | "redNormal" | "redToGreen"; // Variantes visuais
  fullWidth?: boolean;                      // Ocupar 100% da largura (Opcional)
}

export default function Button({
  text,
  href,
  variant = "heroGray",
  fullWidth = false,
}: ButtonProps) {
  
  // Base visual: Transição suave e efeito de crescimento ao passar o mouse
  const baseStyles = "font-extrabold uppercase text-sm tracking-wider px-6 py-3.5 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center cursor-pointer shadow-md shadow-lg hover:shadow-xl";
  
  // As 3 regras de cores e hovers que você pediu:
  const variantStyles = {
    // TIPO 1: Cinza -> Fica na cor do texto "Lenda" (amber-500) e texto preto
    heroGray: "bg-white text-black hover:bg-amber-500",

    // TIPO 2: Vermelho padrão -> Apenas aumenta de tamanho (mantém o vermelho)
    redNormal: "bg-red-700 text-white hover:bg-red-700",

    // TIPO 3: Vermelho -> Cresce e fica Verde (emerald-600)
    redToGreen: "bg-red-700 text-white hover:bg-emerald-600",
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  // Junta as classes
  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${widthStyle}`;

  // Se tiver 'href', decide se é navegação interna (<Link>) ou scroll (<a>)
  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={combinedClasses}>
          {text}
        </Link>
      );
    }
    
    return (
      <a href={href} className={combinedClasses}>
        {text}
      </a>
    );
  }

  return (
    <button className={combinedClasses}>
      {text}
    </button>
  );
}