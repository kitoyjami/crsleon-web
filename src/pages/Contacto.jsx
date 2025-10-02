import site from '@/data/site.json'
import { Section } from '@/components/Section'
import { ContactForm } from '@/components/ContactForm'

export default function Contacto() {
  return (
    <Section
      title="Coordinemos tu próximo proyecto"
      description={`Atendemos a clientes en ${site.address}. Déjanos tus datos para enviarte una propuesta con alcance y cronograma.`}
    >
      <ContactForm />
    </Section>
  )
}
