"use client";

import { useState } from "react";
import { Post } from "@/types/course";

export default function CreatePostModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("history");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      // 1. Simula o envio para a API DummyJSON
      const res = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body, tags: [tag], userId: 5 }),
      });

      const data = await res.json();

      if (res.ok) {
        // 2. Cria o objeto do novo curso
        const newCourse: Post = {
          id: Date.now(), // ID único temporário
          title,
          body,
          tags: [tag],
        };

        // 3. Salva no localStorage do navegador
        const savedCustomCourses = JSON.parse(
          localStorage.getItem("custom_courses") || "[]"
        );
        localStorage.setItem(
          "custom_courses",
          JSON.stringify([newCourse, ...savedCustomCourses])
        );

        setMessage(`🤘 Curso criado com sucesso! (ID: ${data.id})`);

        // 4. Recarrega a página para exibir o novo curso na lista
        setTimeout(() => {
          setIsOpen(false);
          setTitle("");
          setBody("");
          setMessage("");
          window.location.reload(); // Atualiza a tela com o novo curso!
        }, 1200);
      } else {
        setMessage("❌ Falha ao criar o curso.");
      }
    } catch {
      setMessage("❌ Erro de conexão com a API.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full py-3 px-3 bg-[#b90000] hover:bg-red-700 text-white font-black uppercase text-xs rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer relative z-10"
      >
        <span>+</span> Criar Novo Curso
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-[#18181b] border border-zinc-800 p-8 rounded-2xl w-full max-w-lg shadow-2xl relative text-left">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white font-extrabold text-lg cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-2xl font-black uppercase text-white mb-6">
              Criar Novo <span className="text-amber-500">Curso</span>
            </h3>

            {message && (
              <p className="mb-4 text-sm font-bold text-amber-500 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
                {message}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-bold text-zinc-400 mb-1">
                  Título do Curso
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Solo de Riff Thrash Metal"
                  className="w-full bg-[#27272a] text-white p-3 rounded-lg border border-zinc-700 focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-zinc-400 mb-1">
                  Categoria
                </label>
                <select
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="w-full bg-[#27272a] text-white p-3 rounded-lg border border-zinc-700 focus:outline-none focus:border-red-600"
                >
                  <option value="history">Guitarra</option>
                  <option value="crime">Vocal</option>
                  <option value="magical">Bateria</option>
                  <option value="fiction">Baixo</option>
                  <option value="classic">Sampling</option>
                  <option value="love">Teclado</option>
                  <option value="mystery">NuMetal</option>
                  <option value="english">Thrash Metal</option>
                  <option value="american">Black Metal</option>
                  <option value="french">Heavy Metal</option>
                  <option value="memories">White Metal</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-zinc-400 mb-1">
                  Descrição do Curso
                </label>
                <textarea
                  required
                  rows={4}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Descreva o conteúdo..."
                  className="w-full bg-[#27272a] text-white p-3 rounded-lg border border-zinc-700 focus:outline-none focus:border-red-600"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#b90000] hover:bg-red-700 text-white font-black uppercase rounded-lg transition-colors disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? "Publicando..." : "Publicar Curso"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}