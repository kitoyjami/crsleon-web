import site from '@/data/site.json'

const codigoEticaUrl = import.meta.env.VITE_CODIGO_ETICA_URL ?? '/codigo-de-etica'
const brochureUrl = import.meta.env.VITE_BROCHURE_URL ?? '/assets/pdf/brochure.pdf'

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-brand-primary">CRS León</p>
          <p className="mt-4 text-sm text-neutral-600">
            Ingeniería, fabricación y montaje con QA/QC para minería e industria.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-900">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li>{site.address}</li>
            <li>{site.phone}</li>
            <li>
              <a className="text-brand-primary" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-900">Enlaces</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-600">
            <li>
              <a href="/servicios" className="transition hover:text-brand-primary">
                Servicios
              </a>
            </li>
            <li>
              <a href="/proyectos" className="transition hover:text-brand-primary">
                Proyectos
              </a>
            </li>
            <li>
              <a href={brochureUrl} className="transition hover:text-brand-primary">
                Descargar brochure
              </a>
            </li>
            <li>
              <a href={codigoEticaUrl} className="transition hover:text-brand-primary">
                Código de Ética
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-900">Horario</p>
          <p className="mt-3 text-sm text-neutral-600">{site.schedule}</p>
        </div>
      </div>
      <div className="bg-white py-4">
        <p className="text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} CRS León. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
