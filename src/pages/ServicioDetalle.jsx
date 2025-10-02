import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import services from '@/data/services.json'
import { Section } from '@/components/Section'
import { Button } from '@/components/ui/Button'

export default function ServicioDetalle() {
  const { slug } = useParams()
  const service = useMemo(() => services.find((item) => item.slug === slug), [slug])

  if (!service) {
    return (
      <Section title="Servicio no encontrado" description="Revisa la lista de servicios disponibles.">
        <Button as={Link} to="/servicios">
          Volver a servicios
        </Button>
      </Section>
    )
  }

  return (
    <Section
      title={service.title}
      description="Alcance referencial. Ajustamos entregables y cronograma según los requisitos técnicos de tu proyecto."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-sm leading-relaxed text-neutral-700">
          <p>{service.summary}</p>
          <div>
            <h3 className="text-base font-semibold text-brand-dark">Alcance típico</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Ingeniería de detalle y memoria de cálculo.</li>
              <li>Fabricación en taller con trazabilidad de materiales.</li>
              <li>Montaje en campo con plan de izaje y supervisión HSE.</li>
              <li>Ensayos NDT y dossier QA/QC completo.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-brand-dark">Normas y documentos</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Normas aplicables: API 650, AWS D1.1, ASTM A36/A516.</li>
              <li>Plan de inspección y pruebas (ITP) aprobado por el cliente.</li>
              <li>Certificados de materiales y soldadores calificados.</li>
            </ul>
          </div>
          <Button as={Link} to="/contacto">
            Solicitar propuesta
          </Button>
        </div>
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100">
          <img src={service.heroImage} alt={service.title} className="h-full w-full object-cover" />
        </div>
      </div>
    </Section>
  )
}
