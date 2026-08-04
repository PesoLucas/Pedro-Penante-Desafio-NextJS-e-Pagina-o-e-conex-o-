"use client"

import { useState } from "react";

export default function CreatePostModal(){
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tag, setTag] = useState("history");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();
        setIsSubmitting(true);
        setMessage("");

        try {
        const res = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          body,
          tags: [tag],
          userId: 5, // ID fictício exigido pela API
        }),
      });
      
      const data = await res.json();

      if (res.ok){
        setMessage(`Curso criado com sucesso!!! (ID retornado: ${data.id})`);

        setTimeout(() =>{
            setIsOpen(false);
            setTitle("");
            setBody("");
            setMessage("");
        }, 2000);
      } else {
        setMessage("Falha ao criar curso")
      }
    } catch {
        setMessage("Erro com conexão com API")
    } finally{
        setIsSubmitting(false);
    }
};

return (
    <>
      {/* BOTÃO PRINCIPAL QUE ABRE O MODAL */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full py-3 px-4 bg-[#b90000] hover:bg-red-700 text-white font-black uppercase text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
      >
        <span>+</span> Criar Novo Curso
      </button>

      {/* TELA DO MODAL (SÓ APARECE QUANDO isOpen === true) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-[#18181b] border border-zinc-800 p-8 rounded-2xl w-full max-w-lg shadow-2xl relative">
            
            {/* BOTÃO DE FECHAR (X) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white font-extrabold text-lg cursor-pointer"
            >
              ✕
            </button>

            {/* TÍTULO */}
            <h3 className="text-2xl font-black uppercase text-white mb-6">
              Criar Novo <span className="text-amber-500">Curso</span>
            </h3>

            {/* MENSAGEM DE FEEDBACK (SUCESSO/ERRO) */}
            {message && (
              <p className="mb-4 text-sm font-bold text-amber-500 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
                {message}
              </p>
            )}

            {/* FORMULÁRIO */}
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
                  placeholder="Ex: Título do curso"
                  className="w-full bg-[#27272a] text-white p-3 rounded-lg border border-zinc-700 focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-zinc-400 mb-1">
                  Categoria (Tag)
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
                  <option value="english">thrash metal</option>
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
                  placeholder="Descreva o conteúdo do curso..."
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
