import { useMemo, useState } from 'react'
import projectsData from '@/data/projects.json'
import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/ProjectCard'

const uniqueValues = (items, key) => Array.from(new Set(items.map((item) => item[key]))).sort()

export default function Proyectos() {
  const [sector, setSector] = useState('Todos')
  const [type, setType] = useState('Todos')

  const sectors = useMemo(() => ['Todos', ...uniqueValues(projectsData, 'sector')], [])
  const types = useMemo(() => ['Todos', ...uniqueValues(projectsData, 'type')], [])

  const projects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchSector = sector === 'Todos' || project.sector === sector
      const matchType = type === 'Todos' || project.type === type
      return matchSector && matchType
    })
  }, [sector, type])

  return (
    <Section
      title="Casos ejecutados"
      description="Filtros básicos por sector y tipo para identificar proyectos comparables. KPIs y entregables documentados."
    >
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
        <label className="flex items-center gap-2">
          <span className="text-neutral-500">Sector:</span>
          <select
            value={sector}
            onChange={(event) => setSector(event.target.value)}
            className="rounded-full border border-neutral-200 px-4 py-2"
          >
            {sectors.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2">
          <span className="text-neutral-500">Tipo:</span>
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="rounded-full border border-neutral-200 px-4 py-2"
          >
            {types.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {projects.length === 0 && (
        <p className="mt-10 text-center text-sm text-neutral-500">
          No encontramos proyectos con estos filtros. Ajusta la selección para ver más casos.
        </p>
      )}
    </Section>
  )
}
