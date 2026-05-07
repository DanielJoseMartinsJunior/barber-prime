import Navbar from "./components/Navbar";
import barberBg from "./assets/barber-bg.jpg";

export default function App() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 bg-cover bg-center"
        style={{
          backgroundImage: `url(${barberBg})`,
        }}
      >
        {/* OVERLAY ESCURO */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* EFEITO GRADIENTE */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0a0a0a]"></div>

        {/* CONTEÚDO */}
        <div className="relative z-10 text-center max-w-3xl">
          <p className="text-[#D4AF37] tracking-[0.3em] mb-4 uppercase">
            Barber Shop Premium
          </p>

          <h1 className="text-5xl md:text-7xl leading-tight mb-6 font-['Playfair_Display']">
            Seu estilo começa na{" "}
            <span className="text-[#D4AF37]">Barber Prime</span>
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl mb-8">
            Cortes modernos, atendimento premium e uma experiência única.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition">
              Agendar Horário
            </button>

            <button className="border border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-xl hover:bg-[#D4AF37] hover:text-black transition">
              Ver Serviços
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
