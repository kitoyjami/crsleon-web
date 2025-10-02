import { Button } from './ui/Button'

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-brand-primary/10 via-white to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 md:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full bg-brand-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
            Ingeniería metalmecánica integral
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-brand-dark sm:text-5xl">
            Proyectos confiables para la industria peruana
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            Fabricamos, montamos y certificamos tanques, piping y estructuras cumpliendo normas API, ASTM y AWS con controles QA/QC documentados.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button as="a" href="/contacto">
              Cotizar ahora
            </Button>
            <Button as="a" href="/proyectos" variant="ghost">
              Ver proyectos
            </Button>
          </div>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl">
          <dl className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="font-semibold text-neutral-500">Tanques instalados</dt>
              <dd className="mt-2 text-3xl font-semibold text-brand-primary">+120</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-500">Metros soldadura QA/QC</dt>
              <dd className="mt-2 text-3xl font-semibold text-brand-primary">18K</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-500">Paradas de planta</dt>
              <dd className="mt-2 text-3xl font-semibold text-brand-primary">35</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-500">Certificaciones</dt>
              <dd className="mt-2 text-sm font-semibold text-brand-dark">API 650, AWS D1.1, ISO 9001</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
