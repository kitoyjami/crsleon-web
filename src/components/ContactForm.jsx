import { useState } from 'react'
import { Button } from './ui/Button'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL ?? 'eurbano@crsleon.com'
const whatsappNumber = import.meta.env.VITE_WSP ?? '+51976248678'

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}`

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmpresa: ${form.company}\nEmail: ${form.email}\nTeléfono: ${form.phone}\nMensaje: ${form.message}`,
    )
    window.location.href = `mailto:${contactEmail}?subject=Solicitud%20de%20cotización&body=${body}`
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-neutral-800">
            Nombre y apellido
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm shadow-sm focus:border-brand-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-semibold text-neutral-800">
            Empresa
          </label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm shadow-sm focus:border-brand-primary focus:outline-none"
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-neutral-800">
              Email
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
              Teléfono
            </label>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm shadow-sm focus:border-brand-primary focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-semibold text-neutral-800">
            Proyecto o necesidad
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm shadow-sm focus:border-brand-primary focus:outline-none"
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          Enviar solicitud
        </Button>
      </form>
      <div className="space-y-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
        <h3 className="text-lg font-semibold text-brand-dark">¿Prefieres WhatsApp?</h3>
        <p className="text-sm text-neutral-600">
          Resolvemos consultas rápidas y coordinamos visitas técnicas desde WhatsApp Business.
        </p>
        <a
          href={whatsappUrl}
          className="inline-flex w-full items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary/90 sm:w-auto"
          target="_blank"
          rel="noreferrer"
        >
          Escribir por WhatsApp
        </a>
        <div className="space-y-3 text-sm text-neutral-600">
          <p>
            <strong>Email:</strong> {contactEmail}
          </p>
          <p>
            <strong>Teléfono:</strong> {whatsappNumber}
          </p>
        </div>
      </div>
    </div>
  )
}
