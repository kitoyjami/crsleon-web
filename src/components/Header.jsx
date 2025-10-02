import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { Button } from './ui/Button'

const navItems = [
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/brochure', label: 'Brochure' },
  { to: '/contacto', label: 'Contacto' },
]

const correoUrl = import.meta.env.VITE_CORREO_URL ?? 'https://crsleon.com:2096/'
const codigoEticaUrl = import.meta.env.VITE_CODIGO_ETICA_URL ?? '/codigo-de-etica'
const brochureUrl = import.meta.env.VITE_BROCHURE_URL ?? 'https://crsleon.com/wp-content/uploads/2023/10/Portafolio_CRSLeonIngenieros-05-05-23.pdf'
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL ?? 'eurbano@crsleon.com'
const logoSrc = 'https://crsleon.com/wp-content/uploads/2021/08/logo-leon-white.svg'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-brand-dark via-brand-dark to-neutral-950 text-white shadow-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 p-2 ring-1 ring-white/30">
            <img
              src={logoSrc}
              alt="CRS León Ingenieros"
              className="h-6 w-auto drop-shadow"
              loading="lazy"
            />
          </span>
          <span className="text-white">CRS León Ingenieros</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                clsx(
                  'transition hover:text-white',
                  isActive && 'text-white'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a href={codigoEticaUrl} className="transition hover:text-white">
            Código de Ética
          </a>
          <a
            href={brochureUrl}
            className="transition hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            PDF Brochure
          </a>
          <Button as="a" href={`mailto:${contactEmail}`} className="!rounded-full">
            Cotizar
          </Button>
          <Button
            as="a"
            href={correoUrl}
            variant="outline"
            target="_blank"
            rel="noreferrer"
            className="!rounded-full border-white/40 text-white hover:bg-white/10"
          >
            Correo
          </Button>
        </nav>
        <button
          type="button"
          className="button-reset flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          <span className="sr-only">Abrir menú</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-brand-dark/95 text-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  clsx('transition hover:text-white', isActive && 'text-white')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a href={codigoEticaUrl} className="transition hover:text-white" onClick={() => setOpen(false)}>
              Código de Ética
            </a>
            <a
              href={brochureUrl}
              className="transition hover:text-white"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              PDF Brochure
            </a>
            <Button as="a" href={`mailto:${contactEmail}`} onClick={() => setOpen(false)}>
              Cotizar
            </Button>
            <Button
              as="a"
              href={correoUrl}
              variant="outline"
              target="_blank"
              rel="noreferrer"
              className="border-white/40 text-white hover:bg-white/10"
            >
              Correo
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
