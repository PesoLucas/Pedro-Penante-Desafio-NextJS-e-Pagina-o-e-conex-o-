"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Registra o erro no console para depuração
    console.error("Erro na página /explorar:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#121214] flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-3xl font-black text-red-600 uppercase mb-2">
        Ops! Algo deu errado ao carregar os cursos.
      </h2>
      <p className="text-zinc-400 font-medium mb-6">
        Não foi possível se conectar à API da DummyJSON no momento.
      </p>
      
      {/* Botão que tenta recarregar a página/busca novamente */}
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-[#b90000] text-white font-bold uppercase rounded-xl hover:bg-red-700 transition-colors cursor-pointer"
      >
        Tentar Novamente
      </button>
    </div>
  );
}