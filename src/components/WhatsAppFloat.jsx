const whatsappNumber = import.meta.env.VITE_WSP ?? '+51999999999'
const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}`

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-xl font-semibold text-white shadow-lg transition hover:bg-brand-primary/90"
      aria-label="Abrir WhatsApp"
    >
      WA
    </a>
  )
}
