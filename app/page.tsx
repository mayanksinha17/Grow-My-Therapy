export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <header className="w-full border-b border-theme-border py-4 px-6 bg-theme-bg">
        <div className="section-container flex items-center justify-between">
          <div className="font-serif text-2xl font-semibold tracking-tight text-theme-primary">
            Grow My Therapy
          </div>
          <span className="text-xs uppercase tracking-widest text-theme-text-muted font-sans font-medium px-3 py-1 bg-theme-bg-secondary rounded-full">
            Phase 1 Foundation
          </span>
        </div>
      </header>

      <section className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="section-container text-center max-w-2xl mx-auto space-y-6">
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-theme-text leading-tight">
            Foundation Environment Ready
          </h1>
          <p className="font-sans text-base sm:text-lg text-theme-text-muted leading-relaxed">
            Next.js App Router, TypeScript, and Tailwind CSS tokens are active. Ready for Phase 2 homepage clone implementation upon approval.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center px-4 py-2 text-sm font-sans font-medium rounded bg-theme-primary text-theme-text-light shadow-sm">
              Primary Theme Button Token
            </div>
            <div className="inline-flex items-center px-4 py-2 text-sm font-sans font-medium rounded bg-theme-bg-secondary text-theme-text border border-theme-border">
              Secondary Surface Token
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-theme-border py-6 px-6 bg-theme-bg-secondary">
        <div className="section-container text-center text-xs text-theme-text-muted font-sans">
          Phase 1: Project Foundation Verification
        </div>
      </footer>
    </main>
  );
}
