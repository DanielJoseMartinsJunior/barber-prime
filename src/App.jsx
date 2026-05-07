export default function App() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="text-center max-w-3xl">

          <p className="text-[#D4AF37] tracking-[0.3em] mb-4 uppercase">
            Barber Shop Premium
          </p>

          <h1 className="text-5xl md:text-7xl leading-tight mb-6 font-['Playfair_Display']">
            Barber <span className="text-[#D4AF37]">Prime</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl mb-8">
            Estilo, elegância e precisão em cada corte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button className="bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition">
              Agendar Horário
            </button>

            <button className="border border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-xl hover:bg-[#D4AF37] hover:text-black transition">
              Conhecer Serviços
            </button>

          </div>

        </div>

      </section>

    </main>
  )
}