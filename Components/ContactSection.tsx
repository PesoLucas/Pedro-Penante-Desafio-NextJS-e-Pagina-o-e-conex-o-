"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState} from "react";

export default function ContactSection(){
    const router = useRouter();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        router.push("/explorar");
    }
    return (
    <section id="contato" className="bg-[#18181b] py-20 px-4 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-white tracking-wide text-center mb-10">
          Desperte o <span className="text-amber-500">ASTRO</span> em <span className="text-red-600">VOCÊ!</span>
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
          
          {/*lado vermelho*/}
          <div className="md:col-span-5 bg-[#b90000] p-8 md:p-10 flex flex-col justify-between text-white">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold uppercase leading-tight tracking-tight mb-8">
                Preparado Pros <br /> Palcos?
              </h3>

              <div className="space-y-6 font-medium text-sm md:text-base">
                {/*email*/}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 relative shrink-0">
                    <Image src="/email branco.png" alt="Email" fill className="object-contain" />
                  </div>
                  <span className="truncate">contato@metalkingdom.com.br</span>
                </div>

                {/*telefone*/}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 relative shrink-0">
                    <Image src="/phone-call-white-icon.webp" alt="Telefone" fill className="object-contain" />
                  </div>
                  <span>+55(81)9 9595-9595</span>
                </div>

                {/*instagram*/}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 relative shrink-0">
                    <Image src="/instagram branco.png" alt="Instagram" fill className="object-contain" />
                  </div>
                  <span>@metalkingdom</span>
                </div>
              </div>
            </div>
          </div>

          {/*lado cinza*/}
          <div className="md:col-span-7 bg-[#8c8c8c] p-8 md:p-10 flex flex-col justify-between items-center text-[#18181b]">
            
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              
              {/*nome + email*/}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold uppercase mb-1 text-white">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-zinc-300 text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase mb-1 text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seuemail@email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-zinc-300 text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 font-medium"
                  />
                </div>
              </div>

              {/*numero*/}
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-bold uppercase mb-1 text-white">
                  Numero de Telefone
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(99)9 9999-9999"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-300 text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 font-medium"
                />
              </div>

              {/*botao*/}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#b90000] text-white font-black uppercase text-lg rounded-lg shadow-lg hover:bg-[#32CD32] transition-colors cursor-pointer"
                >
                  ENVIAR
                </button>
              </div>

            </form>



          </div>

        </div>

      </div>
    </section>
    )
}