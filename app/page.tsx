import Button from "@/Components/Button";
import Image from "next/image";
import Card from "@/Components/Card";
import Quadrado from "@/Components/Quadrado";
import ContactSection from "@/Components/ContactSection";
import Header from "@/Components/Header";

let tamanhoIcon: number;
tamanhoIcon = 32;

export default function Home() {
  return (
    <div className="w-full bg-[#6e0a0a]">
      <Header/>
      {/* 1. SEÇÃO HERO / INÍCIO */}
      <section
        id="inicio"
        className="relative w-full bg-[#6e0a0a] pt-32 pb-20 px-6 md:px-12 flex items-start overflow-hidden"
      >
        {/* CONTAINER DA IMAGEM DE FUNDO (NA DIREITA) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-full md:w-[60%] h-full">
            <Image
              src="/linkinpark3.png"
              alt="Banda Linkin Park no palco"
              fill
              priority
              className="object-cover object-[85%_center] object-left filter brightness-90"
            />
          </div>

          {/* GRADIENTES PARA O TEXTO FICAR 100% LEGÍVEL NA ESQUERDA */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6e0a0a] via-[#6e0a0a]/100 to-transparent z-10" />
        </div>

        {/* CONTEÚDO DA HERO */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight tracking-tight text-white">
              Se torne a próxima <br />
              <span className="text-amber-500">Lenda</span>
            </h1>

            <p className="mt-4 font-semibold text-white text-lg md:text-xl max-w-lg">
              A Melhor Escola de Musica da américa latina desde 2016
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                text="VEJA NOSSAS AULAS"
                href="/explorar"
                variant="heroGray"
              />
              <Button
                text="Fale com nossos professores"
                href="#contato"
                variant="heroGray"
              />
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 pt-6 max-w-lg">
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 relative flex items-center justify-center">
                  <Image
                    src="/relogio branco.png"
                    alt="Relógio"
                    width={tamanhoIcon}
                    height={tamanhoIcon}
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-2xl mt-1 text-white">
                  +200h
                </span>
                <span className="text-xs font-semibold text-zinc-300">de conteúdo</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 relative flex items-center justify-center">
                  <Image
                    src="/rock mão branco.png"
                    alt="Símbolo de Rock"
                    width={tamanhoIcon}
                    height={tamanhoIcon}
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-2xl mt-1 text-white">+15</span>
                <span className="text-xs font-semibold text-zinc-300">Anos de carreira</span>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 relative flex items-center justify-center">
                  <Image
                    src="/GUITARRA BRANCA.png"
                    alt="Guitarra"
                    width={tamanhoIcon}
                    height={tamanhoIcon}
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-2xl mt-1 text-white">6</span>
                <span className="text-xs font-semibold text-zinc-300">Cursos diferentes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO CURSOS */}
      <section id="cursos" className="bg-black py-16 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest text-white">
              CURSOS
            </h2>
            <p className="text-lg font-semibold text-zinc-300 mt-2">
              Com os <span className="text-amber-500 font-bold uppercase">MELHORES</span> professores do Brasil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              imageSrc="/guitarra.jpg"
              altText="Curso de Guitarra"
              description="Aprenda a criar timbres, melodias e atmosferas que marcam presença no metal. Com mais de 25 horas de conteúdo, você desenvolverá técnica e musicalidade."
            />

            <Card
              imageSrc="/vocal.webp"
              altText="Curso de Vocal"
              description="Domine técnicas vocais avançadas, drive, ressonância e controle de respiração para dominar o palco sem desgastar a sua voz."
            />

            <Card
              imageSrc="/bateria.webp"
              altText="Curso de Bateria"
              description="Desenvolva pedal duplo, independência de membros e viradas complexas com metodologias usadas pelos maiores bateristas da cena mundial."
            />

            <Card
              imageSrc="/baixo.jpg"
              altText="Curso de Baixo"
              description="Técnicas de slap, condução de ritmo e encaixe perfeito com a bateria para criar uma base de peso indiscutível."
            />

            <Card
              imageSrc="/teclado.jpg"
              altText="Curso de Teclado"
              description="Crie timbres modernos, pads envolventes e arranjos harmônicos ricos para integrar qualquer estilo musical."
            />

            <Card
              imageSrc="/dj.webp"
              altText="Curso de Produção"
              description="Do home studio ao som profissional. Aprenda captação, mixagem e masterização de músicas pesadas do zero."
            />
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO SOBRE*/}
      <section id="sobre" className="bg-[#18181b] pt-20 pb-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LADO ESQUERDO: TEXTOS */}
          <div className="flex flex-col items-start space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-white tracking-wider">
                SOBRE A
              </h2>
              <Image 
                src="/metalkingdom extenço.png" 
                alt="MetalKingdom" 
                width={220} 
                height={60} 
                className="object-contain"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
              A <span className="text-amber-500 font-extrabold uppercase">MELHOR</span> da america latina há 10 anos
            </h3>

            <p className=" text-white font-semibold text-base md:text-lg leading-relaxed max-w-xl">
              A MetalKingdom é a maior escola de música da América Latina desde 2016, oferecemos aulas gravadas especializadas no universo do metal. Nossa metodologia permite que alunos aprendam no próprio ritmo, com cursos focados em instrumentos, técnica e performance dentro do gênero.
            </p>
          </div>

          {/* LADO DIREITO: GRID 2x2 USANDO O COMPONENTE QUADRADO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Quadrado
              imageSrc="/relogio vermelho.png"
              altText="Relógio"
              title="Mais de 200 horas"
              subtitle="de conteúdo"
            />

            <Quadrado
              imageSrc="/like vermelho.png"
              altText="Aprovação"
              title="mais 95% de aprovação"
              subtitle="pelos usuários"
            />

            <Quadrado
              imageSrc="/musica vermelho.png"
              altText="Professores"
              title="Equipe de Professores"
              subtitle="Renomados"
            />

            <Quadrado
              imageSrc="/grammy-award-icon vermelho.png"
              altText="Grammys"
              title="mais 5 grammys"
              subtitle="vencidos por ex alunos"
            />
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO CONTATO */}
      <ContactSection />
    </div>
  );
}