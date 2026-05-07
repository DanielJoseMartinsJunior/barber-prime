import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div>
            <h1 className="text-2xl text-white font-['Playfair_Display']">
              Barber <span className="text-[#D4AF37]">Prime</span>
            </h1>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-10">

            <a
              href="#"
              className="text-zinc-300 hover:text-[#D4AF37] transition"
            >
              Início
            </a>

            <a
              href="#"
              className="text-zinc-300 hover:text-[#D4AF37] transition"
            >
              Serviços
            </a>

            <a
              href="#"
              className="text-zinc-300 hover:text-[#D4AF37] transition"
            >
              Galeria
            </a>

            <a
              href="#"
              className="text-zinc-300 hover:text-[#D4AF37] transition"
            >
              Contato
            </a>

          </nav>

          {/* BOTÃO DESKTOP */}
          <div className="hidden md:block">

            <button className="bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition">
              Agendar
            </button>

          </div>

          {/* BOTÃO MOBILE */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>

      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-white/10">

          <nav className="flex flex-col p-6 gap-6">

            <a
              href="#"
              className="text-zinc-300 hover:text-[#D4AF37] transition"
            >
              Início
            </a>

            <a
              href="#"
              className="text-zinc-300 hover:text-[#D4AF37] transition"
            >
              Serviços
            </a>

            <a
              href="#"
              className="text-zinc-300 hover:text-[#D4AF37] transition"
            >
              Galeria
            </a>

            <a
              href="#"
              className="text-zinc-300 hover:text-[#D4AF37] transition"
            >
              Contato
            </a>

            <button className="bg-[#D4AF37] text-black font-semibold py-3 rounded-xl">
              Agendar
            </button>

          </nav>

        </div>
      )}

    </header>
  );
}