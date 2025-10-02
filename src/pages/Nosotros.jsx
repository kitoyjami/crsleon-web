import clients from '@/data/clients.json'
import site from '@/data/site.json'
import { Section } from '@/components/Section'
import { KPICounter } from '@/components/KPICounter'

export default function Nosotros() {
  return (
    <div>
      <Section
        title="Capacidades integrales"
        description="Equipo multidisciplinario para ingeniería, fabricación y montaje con controles QA/QC certificados."
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-sm leading-relaxed text-neutral-700">
            <p>
              Operamos taller propio en Lima con equipos CNC, corte plasma y posicionadores para fabricación en serie. En campo,
              nuestros supervisores QA/QC aseguran trazabilidad total desde recepción de materiales hasta pruebas hidrostáticas.
            </p>
            <p>
              Contamos con un sistema de gestión ISO 9001:2015 y procedimientos alineados a normas API, AWS y ASME. Cada entrega
              incluye dossier digital firmado y respaldos fotográficos.
            </p>
          </div>
          <KPICounter
            items={[
              { label: 'Soldadores calificados', value: '28' },
              { label: 'Inspectores certificados', value: '6', caption: 'API 653 / AWS CWI' },
              { label: 'Superficie de taller', value: '2,500 m²' },
              { label: 'Capacidad de izaje', value: '25 ton' },
            ]}
          />
        </div>
      </Section>
      <Section
        background="muted"
        title="Cultura de seguridad y ética"
        description="Políticas de seguridad industrial, gestión ambiental y código de ética público para clientes y colaboradores."
      >
        <div className="grid gap-6 text-sm leading-relaxed text-neutral-700 lg:grid-cols-3">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6">
            <h3 className="text-base font-semibold text-brand-dark">HSE</h3>
            <p className="mt-3 text-neutral-600">
              Programas de inducción, AST, permisos de trabajo y supervisión permanente en campo.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6">
            <h3 className="text-base font-semibold text-brand-dark">Calidad</h3>
            <p className="mt-3 text-neutral-600">
              Planes ITP, calibración de equipos y registros digitales auditables.
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6">
            <h3 className="text-base font-semibold text-brand-dark">Ética</h3>
            <p className="mt-3 text-neutral-600">
              Código accesible 24/7 y canal de denuncias para trabajadores y proveedores.
            </p>
          </div>
        </div>
      </Section>
      <Section
        title="Clientes que confían"
        description={`Disponibles para referencias y visitas a instalaciones. Contáctanos al ${site.phone}.`}
      >
        <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-neutral-500">
          {clients.map((client) => (
            <li key={client.name} className="rounded-full border border-neutral-200 px-5 py-2">
              {client.name}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  )
}
