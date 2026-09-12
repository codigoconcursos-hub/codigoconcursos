function PmespLogo() {
  return (
    <div
      aria-label="Logo PMESP"
      className="relative flex h-32 w-32 shrink-0 items-center justify-center drop-shadow-glow sm:h-36 sm:w-36"
      role="img"
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M80 5L145 27V82C145 124 119 157 80 174C41 157 15 124 15 82V27L80 5Z" fill="#0D2A4D" stroke="#F6CF6B" strokeWidth="5" />
        <path d="M80 20L130 37V81C130 113 111 139 80 154C49 139 30 113 30 81V37L80 20Z" fill="#071A33" stroke="#D9AD3F" strokeWidth="2" />
        <path d="M80 39L87 59H108L91 71L98 92L80 80L62 92L69 71L52 59H73L80 39Z" fill="#F6CF6B" />
        <path d="M47 108H113" stroke="#F6CF6B" strokeWidth="4" strokeLinecap="round" />
        <path d="M56 120H104" stroke="#D9AD3F" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="relative mt-16 text-[11px] font-black tracking-[0.18em] text-white sm:text-xs">PMESP</span>
    </div>
  )
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(30,77,125,0.32),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(217,173,63,0.08),_transparent_35%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-gold-400 shadow-[0_0_12px_rgba(246,207,107,0.8)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">Polícia Militar</span>
          </div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">São Paulo</span>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          <PmespLogo />
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.35em] text-gold-400">Servir e proteger</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Polícia Militar do Estado de São Paulo
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Segurança pública, cidadania e compromisso com a sociedade paulista.
          </p>
          <button className="mt-9 rounded-full border border-gold-400/70 bg-gold-400 px-7 py-3 text-sm font-bold text-navy-950 transition hover:bg-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-navy-950">
            Acessar plataforma
          </button>
        </section>

        <footer className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
          Governo do Estado de São Paulo · PMESP
        </footer>
      </div>
    </main>
  )
}

export default App
