import { Post } from "@/types/course";

interface CourseCardProps {
  post: Post;
}

export default function CourseCard({ post }: CourseCardProps) {
  return (
    <div className="bg-[#18181b] border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between p-6 shadow-xl group">
      <div>
        {/* TAG E CATERGORIA */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-zinc-800 text-amber-500 font-extrabold text-[10px] uppercase rounded-full border border-zinc-700">
            {post.tags[0] || "Metal"}
          </span>
        </div>

        {/* TÍTULO DO CURSO */}
        <h2 className="text-xl font-extrabold text-white group-hover:text-amber-500 transition-colors line-clamp-2 uppercase">
          {post.title}
        </h2>

        {/* DESCRIÇÃO / CORPO */}
        <p className="text-zinc-400 text-sm font-light mt-3 line-clamp-3 leading-relaxed">
          {post.body}
        </p>
      </div>

      {/* RODAPÉ DO CARD / BOTÃO */}
      <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
        <button className="w-full text-xs font-extrabold uppercase text-white bg-[#b90000] py-2.5 rounded-lg hover:bg-red-700 transition-colors cursor-pointer">
          Acessar Aula
        </button>
      </div>
    </div>
  );
}