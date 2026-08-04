"use client";

import { Post } from "@/types/course";

interface CourseCardProps {
  post: Post;
  onDelete?: (id: number) => void; // 👈 Callback para apagar
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

export default function CourseCard({ post, onDelete }: CourseCardProps) {
  const rawTag = post.tags[0] || "metal";
  const tagLabel = categoryLabels[rawTag] || rawTag;

  const handleAccessLesson = () => {
    alert(`🤘 Carregando a aula do curso: "${post.title}"!`);
  };

  const handleDelete = async () => {
    if (confirm(`Deseja realmente apagar o curso "${post.title}"?`)) {
      try {
        // 📡 Requisição DELETE simulada para a API DummyJSON
        await fetch(`https://dummyjson.com/posts/${post.id}`, {
          method: "DELETE",
        });
      } catch (err) {
        console.error("Erro na API:", err);
      }

      // Dispara a remoção no componente pai
      if (onDelete) {
        onDelete(post.id);
      }
    }
  };

  return (
    <div className="bg-[#18181b] border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between p-6 shadow-xl group relative">
      <div>
        {/* CABEÇALHO DO CARD (Tag e Botão Excluir) */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-zinc-800 text-amber-500 font-extrabold text-[10px] uppercase rounded-full border border-zinc-700">
            {tagLabel}
          </span>

          {/* BOTÃO APAGAR (Aparece se for um curso dinâmico/deletável) */}
          {onDelete && (
            <button
              type="button"
              onClick={handleDelete}
              title="Excluir Curso"
              className="text-zinc-500 hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-zinc-800 cursor-pointer"
            >
              🗑️
            </button>
          )}
        </div>

        {/* TÍTULO */}
        <h2 className="text-xl font-extrabold text-white group-hover:text-amber-500 transition-colors line-clamp-2 uppercase">
          {post.title}
        </h2>

        {/* DESCRIÇÃO */}
        <p className="text-zinc-400 text-sm font-light mt-3 line-clamp-3 leading-relaxed">
          {post.body}
        </p>
      </div>

      {/* BOTÃO */}
      <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
        <button
          type="button"
          onClick={handleAccessLesson}
          className="w-full text-xs font-extrabold uppercase text-white bg-[#b90000] py-2.5 rounded-lg hover:bg-red-700 transition-colors cursor-pointer"
        >
          Acessar Aula
        </button>
      </div>
    </div>
  );
}