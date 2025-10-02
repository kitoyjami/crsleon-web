import { Link } from 'react-router-dom'

export function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 bg-neutral-200">
        <img
          src={project.thumb}
          alt={project.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-neutral-500">
          <span>{project.sector}</span>
          <span>{project.type}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-brand-dark">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm text-neutral-600">{project.summary}</p>
        <dl className="mt-4 grid grid-cols-2 gap-4 text-xs">
          {Object.entries(project.kpis).map(([key, value]) => (
            <div key={key}>
              <dt className="text-neutral-500">{key.replace(/_/g, ' ')}</dt>
              <dd className="mt-1 text-sm font-semibold text-brand-primary">{value}</dd>
            </div>
          ))}
        </dl>
        <Link
          to={`/proyectos/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
        >
          Ver caso
          <span aria-hidden className="text-lg">→</span>
        </Link>
      </div>
    </article>
  )
}
