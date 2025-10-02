import { Section } from '@/components/Section'
import { PDFViewer } from '@/components/PDFViewer'

const brochureUrl =
  import.meta.env.VITE_BROCHURE_URL ?? 'https://crsleon.com/wp-content/uploads/2023/10/Portafolio_CRSLeonIngenieros-05-05-23.pdf'

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
