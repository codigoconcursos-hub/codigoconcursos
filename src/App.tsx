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
          <img 
            src="/uploads/Logo_PMESP.png" 
            alt="Brasão Oficial da Polícia Militar de São Paulo" 
            className="relative z-10 h-48 w-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.45)] sm:h-56 md:h-64" 
          />
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.35em] text-gold">Estado de São Paulo</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-6xl">Servir e proteger</h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/65 sm:text-lg">
            Bem-vindo à interface da Polícia Militar do Estado de São Paulo.
          </p>
          <div className="mt-10 h-1 w-16 rounded-full bg-gold" />
        </section>

        <section className="mb-8 rounded-3xl border border-gold/40 bg-white/5 px-6 py-10 shadow-[0_20px_40px_rgba(0,0,0,0.35)] sm:px-12">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
            <img
              src="/uploads/Logo_PMESP.png"
              alt="Brasão Oficial da Polícia Militar de São Paulo"
              className="h-32 w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)] sm:h-40"
            />
            <div className="flex flex-col items-center gap-4 md:items-start">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Edição oficial</p>
              <h2 className="max-w-md text-2xl font-black tracking-tight sm:text-3xl">
                Leve o símbolo da PMESP com você
              </h2>
              <p className="max-w-md text-sm leading-6 text-white/65 sm:text-base">
                Um item que representa tradição, honra e o orgulho de servir. Disponível por tempo limitado.
              </p>
              <a
                href="https://hotmart.com/pt-br/marketplace/produtos/apostilas-pmesp-plano-de-estudos/E107558581C"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block rounded-full bg-gold px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-navy transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-gold/40"
              >
                Garantir o meu agora
              </a>
            </div>
          </div>
        </section>

        <section className="mb-8 flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold">Feito por quem passou pela prova</p>
          <p className="max-w-md text-sm leading-6 text-white/65 sm:text-base">
            Antes de ensinar o caminho, nós tivemos que percorrê-lo.
          </p>
          <p className="text-sm font-semibold text-white/80">Criador e professor do Código Concursos</p>
        </section>

        <footer className="flex flex-col items-center gap-4 border-t border-white/10 pt-5 text-center text-xs">
          <img
            src="/uploads/Logo_PMESP.png"
            alt="Brasão Oficial da Polícia Militar de São Paulo"
            className="block h-20 w-auto object-contain opacity-100 drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)] sm:h-24"
          />
          <span className="text-white/40">Polícia Militar do Estado de São Paulo</span>
        </footer>
      </div>
    </main>
  )
}

export default App
