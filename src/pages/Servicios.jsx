import services from '@/data/services.json'
import { Section } from '@/components/Section'
import { ServiceCard } from '@/components/ServiceCard'

export default function Servicios() {
  return (
    <div>
      <Section
        title="Servicios especializados"
        description="Soluciones metalmecánicas con equipos propios, supervisión QA/QC y dosieres completos por norma."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>
    </div>
  )
}
