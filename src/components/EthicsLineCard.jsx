import { useState } from 'react'
import { Button } from './ui/Button'

const ethicsEmail = import.meta.env.VITE_ETHICS_EMAIL ?? 'eurbano@crsleon.com'

export function EthicsLineCard() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nCorreo electrónico: ${form.email}\nTeléfono: ${form.phone}\nDenuncia: ${form.message}`,
    )
    window.location.href = `mailto:${ethicsEmail}?subject=Denuncia%20Línea%20Ética&body=${body}`
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4 rounded-3xl border border-brand-primary/30 bg-white p-8 shadow-xl">
        <span className="inline-flex rounded-full bg-brand-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
          Línea ética
        </span>
        <h2 className="text-2xl font-semibold text-brand-dark">Reporta cualquier conducta que vulnere nuestro código</h2>
        <p className="text-sm leading-relaxed text-neutral-700">
          El canal es confidencial y está disponible para colaboradores, proveedores y terceros. Cada reporte es recibido por el comité de integridad para su revisión.
        </p>
        <ul className="space-y-2 rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-600">
          <li>
            <strong>Formulario web:</strong> Completa el formulario para enviar tu denuncia directamente a nuestro equipo de cumplimiento.
          </li>
          <li>
            <strong>Correo directo:</strong>{' '}
            <a href={`mailto:${ethicsEmail}`} className="text-brand-primary">
              {ethicsEmail}
            </a>
          </li>
          <li>
            <strong>Dirección postal:</strong> Jr. Mariscal Miller 108, Int. 102, Trujillo, La Libertad - Perú.
          </li>
          <li>
            <strong>Línea telefónica:</strong> Escríbenos al WhatsApp +51 976 248 678 de lunes a viernes de 9:00 a 18:00.
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-neutral-800">
            Nombre (opcional)
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm shadow-sm focus:border-brand-primary focus:outline-none"
            placeholder="Puedes usar un seudónimo"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-neutral-800">
            Correo electrónico de contacto
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm shadow-sm focus:border-brand-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-neutral-800">
            Teléfono (opcional)
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm shadow-sm focus:border-brand-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-semibold text-neutral-800">
            Describe la situación
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm shadow-sm focus:border-brand-primary focus:outline-none"
            placeholder="Incluye fechas, personas involucradas y cualquier evidencia relevante."
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          Enviar denuncia
        </Button>
        <p className="text-xs text-neutral-500">
          Al enviar este formulario aceptas que CRS León se comunique contigo para ampliar la información y garantizar un debido proceso.
        </p>
      </form>
    </div>
  )
}
