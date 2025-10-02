import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '@/data/projects.json'
import { Section } from '@/components/Section'
import { Button } from '@/components/ui/Button'

export default function ProyectoDetalle() {
  const { slug } = useParams()
  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug])

  if (!project) {
    return (
      <Section title="Proyecto no encontrado" description="Vuelve al listado para revisar otros casos.">
        <Button as={Link} to="/proyectos">
          Ver proyectos
        </Button>
      </Section>
    )
  }

  return (
    <Section
      title={project.title}
      description={`${project.client} · ${project.sector} · ${project.type}`}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-6 text-sm leading-relaxed text-neutral-700">
          <p>{project.summary}</p>
          <div>
            <h3 className="text-base font-semibold text-brand-dark">KPIs principales</h3>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              {Object.entries(project.kpis).map(([key, value]) => (
                <div key={key} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">{key.replace(/_/g, ' ')}</dt>
                  <dd className="mt-2 text-xl font-semibold text-brand-primary">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="text-base font-semibold text-brand-dark">Entregables</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {project.deliverables?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <Button as={Link} to="/contacto">
            Solicitar un proyecto similar
          </Button>
        </div>
        <div className="space-y-4">
          {project.gallery?.map((image) => (
            <div key={image} className="overflow-hidden rounded-3xl border border-neutral-200">
              <img src={image} alt={`${project.title} - evidencia`} className="w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
