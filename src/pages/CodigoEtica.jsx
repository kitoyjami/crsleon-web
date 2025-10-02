import { Section } from '@/components/Section'
import { EthicsLineCard } from '@/components/EthicsLineCard'

const codigoEticaUrl = import.meta.env.VITE_CODIGO_ETICA_URL ?? '/assets/pdf/codigo-etica.pdf'

export default function CodigoEtica() {
  return (
    <Section
      title="Código de ética"
      description="Compromiso con la transparencia, cumplimiento normativo y conducta responsable de todo el equipo CRS León."
    >
      <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-neutral-700">
        <p>
          Nuestro código recoge principios de integridad, libre competencia, prevención de conflictos de interés y respeto a los
          derechos humanos. Aplica para trabajadores, contratistas y aliados comerciales.
        </p>
        <p>
          Mantenemos un canal de denuncias confidencial y procesos internos de investigación. El cumplimiento se refuerza con
          capacitaciones periódicas y auditorías internas.
        </p>
        <a
          href={codigoEticaUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-brand-primary px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary/10"
        >
          Ver código completo
        </a>
      </div>
      <div className="mt-12">
        <EthicsLineCard />
      </div>
    </Section>
  )
}
