function PMESPLogo() {
  return (
    <div className="relative flex h-40 w-40 items-center justify-center drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)] sm:h-44 sm:w-44" aria-label="Logo da Polícia Militar do Estado de São Paulo">
      <div className="absolute inset-0 rotate-45 rounded-[2rem] border-8 border-gold bg-navy" />
      <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-gold bg-white text-navy sm:h-32 sm:w-32">
        <span className="text-[2.1rem] font-black leading-none tracking-tight">PM</span>
        <span className="text-[0.65rem] font-bold tracking-[0.22em]">ESP</span>
        <div className="mt-1 h-1 w-12 rounded-full bg-gold" />
      </div>
      <div className="absolute -bottom-2 rounded-full border-2 border-gold bg-navy px-3 py-1 text-[0.6rem] font-bold tracking-[0.18em] text-white">
        SÃO PAULO
      </div>
    </div>
  )
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(213,170,69,0.16),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(22,72,129,0.45),_transparent_42%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Polícia Militar</span>
          <span className="rounded-full border border-gold/40 px-3 py-1 text-xs font-medium text-gold">PMESP</span>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
            <PMESPLogo />
            <img 
              src="/uploads/Logo_PMESP.png" 
              alt="Brasão Oficial da Polícia Militar de São Paulo" 
              className="h-40 w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)] sm:h-44" 
            />
          </div>
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.35em] text-gold">Estado de São Paulo</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-6xl">Servir e proteger</h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/65 sm:text-lg">
            Bem-vindo à interface da Polícia Militar do Estado de São Paulo.
          </p>
          <div className="mt-10 h-1 w-16 rounded-full bg-gold" />
        </section>

        <footer className="border-t border-white/10 pt-5 text-center text-xs text-white/40">
          Polícia Militar do Estado de São Paulo
        </footer>
      </div>
    </main>
  )
}

export default App
