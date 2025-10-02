import { Button } from './ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-primary/25 to-white" />
      <div className="absolute inset-0 opacity-30 mix-blend-screen md:opacity-40" aria-hidden>
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(189,23,20,0.45),transparent_55%)]" />
      </div>
      <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-brand-primary/20 blur-3xl" aria-hidden />
      <div className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
              Ingeniería metalmecánica integral
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Proyectos confiables para la industria peruana
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Fabricamos, montamos y certificamos tanques, piping y estructuras cumpliendo normas API, ASTM y AWS con controles QA/QC documentados.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button as="a" href="/contacto" className="shadow-lg shadow-brand-primary/40">
                Cotizar ahora
              </Button>
              <Button as="a" href="/proyectos" variant="ghostInverse">
                Ver proyectos
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur">
            <dl className="grid grid-cols-2 gap-6 text-sm text-white/80">
              <div>
                <dt className="font-semibold text-white/60">Tanques instalados</dt>
                <dd className="mt-2 text-3xl font-semibold text-white">+120</dd>
              </div>
              <div>
                <dt className="font-semibold text-white/60">Metros soldadura QA/QC</dt>
                <dd className="mt-2 text-3xl font-semibold text-white">18K</dd>
              </div>
              <div>
                <dt className="font-semibold text-white/60">Paradas de planta</dt>
                <dd className="mt-2 text-3xl font-semibold text-white">35</dd>
              </div>
              <div>
                <dt className="font-semibold text-white/60">Certificaciones</dt>
                <dd className="mt-2 text-sm font-semibold text-white">API 650, AWS D1.1, ISO 9001</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
