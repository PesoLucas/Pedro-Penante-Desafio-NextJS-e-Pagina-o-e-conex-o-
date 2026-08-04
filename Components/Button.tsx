import Link from "next/link";

interface ButtonProps {
  text: string;                           
  href?: string;                            
  variant?: "heroGray" | "redNormal" | "redToGreen"; 
  fullWidth?: boolean;                      
}

export default function Button({
  text,
  href,
  variant = "heroGray",
  fullWidth = false,
}: ButtonProps) {
  
  const baseStyles = "font-extrabold uppercase text-sm tracking-wider px-6 py-3.5 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center cursor-pointer shadow-md shadow-lg hover:shadow-xl";
  
  const variantStyles = {
    heroGray: "bg-white text-black hover:bg-amber-500",

    redNormal: "bg-red-700 text-white hover:bg-red-700",

    redToGreen: "bg-red-700 text-white hover:bg-emerald-600",
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${widthStyle}`;

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