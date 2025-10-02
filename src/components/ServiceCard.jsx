import { Link } from 'react-router-dom'

export function ServiceCard({ service }) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div>
        <h3 className="text-xl font-semibold text-brand-dark">{service.title}</h3>
        <p className="mt-3 text-sm text-neutral-600">{service.summary}</p>
        <ul className="mt-4 space-y-2 text-sm text-neutral-600">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-primary" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        to={`/servicios/${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
      >
        Ver alcance
        <span aria-hidden className="text-lg">→</span>
      </Link>
    </article>
  )
}
