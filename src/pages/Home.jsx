import services from '@/data/services.json'
import projects from '@/data/projects.json'
import clients from '@/data/clients.json'
import site from '@/data/site.json'
import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { ServiceCard } from '@/components/ServiceCard'
import { ProjectCard } from '@/components/ProjectCard'
import { KPICounter } from '@/components/KPICounter'
import { Button } from '@/components/ui/Button'

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <Section
        id="servicios"
        eyebrow="Expertise"
        title="Servicios con control total de calidad"
        description="Equipos y personal certificados para fabricar, instalar y mantener activos críticos sin sorpresas en campo."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>
      <Section
        id="kpi"
        background="muted"
        title="Resultados verificables"
        description="Cada proyecto incluye dosieres QA/QC, control documental y trazabilidad total."
      >
        <KPICounter
          items={[
            { label: 'Normas aplicadas', value: 'API 650, AWS D1.1, ISO 9001' },
            { label: 'Personal certificado', value: '45 técnicos', caption: 'Soldadores 3G/4G, inspectores API' },
            { label: 'Backlog entregado', value: '98%', caption: 'Compromisos cumplidos en los últimos 24 meses' },
            { label: 'Cobertura', value: 'Perú & LATAM', caption: 'Base en Lima, operaciones mineras y portuarias' },
          ]}
        />
      </Section>
      <Section
        id="proyectos"
        title="Casos recientes"
        description="KPIs claros para decisiones técnicas: plazos reales, normas aplicadas y entregables completos."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button as="a" href="/proyectos" variant="outline">
            Ver todos los proyectos
          </Button>
        </div>
      </Section>
      <Section
        id="clientes"
        background="muted"
        title="Confianza de líderes industriales"
        description="Mineras, ports y fabricantes que exigen controles y documentación impecable."
      >
        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-neutral-500">
          {clients.map((client) => (
            <li key={client.name} className="rounded-full border border-neutral-200 px-5 py-2">
              {client.name}
            </li>
          ))}
        </ul>
      </Section>
      <Section
        id="cta"
        background="dark"
        title="Listos para tu próximo tanque, estructura o parada de planta"
        description={`Atención comercial inmediata al ${site.phone} o por correo a ${site.email}.`}
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Button as="a" href="/contacto">
            Solicitar propuesta
          </Button>
          <Button as="a" href="/brochure" variant="outline" className="text-white">
            Descargar brochure
          </Button>
        </div>
      </Section>
    </div>
  )
}
