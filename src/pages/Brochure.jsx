import { Section } from '@/components/Section'
import { PDFViewer } from '@/components/PDFViewer'

const brochureUrl = import.meta.env.VITE_BROCHURE_URL ?? '/assets/pdf/brochure.pdf'

export default function Brochure() {
  return (
    <Section
      title="Brochure corporativo"
      description="Visualiza o descarga el brochure actualizado con servicios, capacidades y certificaciones."
    >
      <PDFViewer src={brochureUrl} title="Brochure CRS León" />
    </Section>
  )
}
