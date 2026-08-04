import Link from "next/link";
import SearchAndFilters from "./components/SearchAndFilters";
import CourseList from "./components/CourseList";
import CreatePostModal from "./components/CreatePostModal";

interface PageProps {
  searchParams: Promise<{
    page?: string;
    q?: string;
    tag?: string;
  }>;
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

export default async function ExplorarPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const searchQuery = resolvedParams.q || "";
  const selectedTag = resolvedParams.tag || "";

  const availableTags = [
    "history",
    "crime",
    "magical",
    "fiction",
    "classic",
    "love",
    "mystery",
    "english",
    "american",
    "french",
    "memories",
  ];

  const categoryTitle = selectedTag
    ? categoryLabels[selectedTag] || selectedTag
    : "";

  return (
    <div className="min-h-screen bg-[#121214] text-white flex">
      <aside className="w-64 bg-[#18181b] border-r border-zinc-800 p-6 hidden lg:flex flex-col justify-between shrink-0 h-screen sticky top-0">
        <div className="space-y-8">
          <Link href="/" className="block">
            <span className="text-xl font-black uppercase tracking-wider text-white">
              Metal<span className="text-red-600">Kingdom</span>
            </span>
          </Link>

          <nav className="space-y-6">
            <div>
              <p className="text-xs font-black uppercase text-zinc-500 tracking-wider mb-3">
                CATÁLOGO
              </p>
              <ul className="space-y-2 text-sm font-semibold text-zinc-300">
                <li>
                  <Link
                    href="/explorar"
                    className="flex items-center gap-3 p-2 rounded-lg bg-zinc-800 text-amber-500"
                  >
                    <span>🎸</span> Todos os Cursos
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="pt-6 border-t border-zinc-800">
          <CreatePostModal />
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="mb-8">
          <SearchAndFilters categories={availableTags} />
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase text-amber-500">
              Explorar / Catálogo
            </span>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              {selectedTag
                ? `Categoria: ${categoryTitle}`
                : searchQuery
                ? `Busca: "${searchQuery}"`
                : "Todos os Cursos"}
            </h1>
          </div>

          <div className="lg:hidden">
            <CreatePostModal />
          </div>
        </div>

        <CourseList searchQuery={searchQuery} selectedTag={selectedTag} />
      </main>
    </div>
  );
}