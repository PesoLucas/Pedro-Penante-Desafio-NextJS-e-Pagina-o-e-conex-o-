"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

interface SearchAndFiltersProps {
  categories: string[];
}

const categoryLabels: Record<string, string> = {
  history: "Guitarra",
  crime: "Vocal",
  magical: "Bateria",
  fiction: "Baixo",
  classic: "Sampling",
  love: "Teclado",
  mystery: "NuMetal",
  english: "Thrash Metal",
  american: "Black Metal",
  french: "Heavy Metal",
  memories: "White Metal",
};

export default function SearchAndFilters({ categories }: SearchAndFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentSearch = searchParams.get("q") || "";
  const currentCategory = searchParams.get("tag") || "";
  const [searchTerm, setSearchTerm] = useState(currentSearch);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchTerm) {
      params.set("q", searchTerm);
    } else {
      params.delete("q");
    }
    params.set("page", "1");
    startTransition(() => {
      router.push(`/explorar?${params.toString()}`);
    });
  };

  const handleCategorySelect = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tag === currentCategory) {
      params.delete("tag");
    } else {
      params.set("tag", tag);
      params.delete("q");
    }
    params.set("page", "1");
    startTransition(() => {
      router.push(`/explorar?${params.toString()}`);
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/*pesquisa*/}
      <form onSubmit={handleSearch} className="relative w-full max-w-xl">
        <input
          type="text"
          placeholder="Pesquisar aulas, riffs, professores..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#27272a] text-white placeholder-zinc-400 px-5 py-3 pr-12 rounded-full border border-zinc-700 focus:outline-none focus:border-red-600 transition-colors"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-amber-500 font-bold"
        >
          🔍
        </button>
      </form>

      {/*categorias*/}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-xs uppercase font-extrabold text-zinc-400 mr-2">
          Categorias:
        </span>
        {categories.map((tag) => {
          const isActive = currentCategory === tag;
          
          const label = categoryLabels[tag] || tag;

          return (
            <button
              key={tag}
              onClick={() => handleCategorySelect(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${
                isActive
                  ? "bg-[#b90000] text-white shadow-lg scale-105"
                  : "bg-[#27272a] text-zinc-300 hover:bg-zinc-700 hover:text-amber-500"
              }`}
            >
              {label} {isActive && "✕"}
            </button>
          );
        })}
      </div>

      {isPending && (
        <p className="text-xs text-amber-500 animate-pulse font-bold">
          Buscando cursos...
        </p>
      )}
    </div>
  );
}