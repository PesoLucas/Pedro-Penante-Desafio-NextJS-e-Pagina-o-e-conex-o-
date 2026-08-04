export default function Loading() {
  return (
    <div className="min-h-screen bg-[#121214] p-10 flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4" />

      <p className="text-amber-500 font-extrabold uppercase tracking-widest text-sm animate-pulse">
        Carregando Cursos da MetalKingdom...
      </p>
      
    </div>
  );
}