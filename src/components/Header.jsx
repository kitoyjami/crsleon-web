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

const correoUrl = import.meta.env.VITE_CORREO_URL ?? '#'
const codigoEticaUrl = import.meta.env.VITE_CODIGO_ETICA_URL ?? '/codigo-de-etica'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-brand-primary">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white">
            CR
          </span>
          <span>CRS León</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                clsx('transition hover:text-brand-primary', isActive && 'text-brand-primary')
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a href={codigoEticaUrl} className="transition hover:text-brand-primary">
            Código de Ética
          </a>
          <a
            href="/brochure"
            className="transition hover:text-brand-primary"
          >
            PDF Brochure
          </a>
          <Button as="a" href="/contacto" className="!rounded-full">
            Cotizar
          </Button>
          <Button
            as="a"
            href={correoUrl}
            variant="outline"
            target="_blank"
            rel="noreferrer"
            className="!rounded-full"
          >
            Correo
          </Button>
        </nav>
        <button
          type="button"
          className="button-reset flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          <span className="sr-only">Abrir menú</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-neutral-900" />
            <span className="block h-0.5 w-6 bg-neutral-900" />
            <span className="block h-0.5 w-6 bg-neutral-900" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm font-medium text-neutral-700">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  clsx('transition hover:text-brand-primary', isActive && 'text-brand-primary')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a href={codigoEticaUrl} className="transition hover:text-brand-primary" onClick={() => setOpen(false)}>
              Código de Ética
            </a>
            <a href="/brochure" className="transition hover:text-brand-primary" onClick={() => setOpen(false)}>
              PDF Brochure
            </a>
            <Button as="a" href="/contacto" onClick={() => setOpen(false)}>
              Cotizar
            </Button>
            <Button as="a" href={correoUrl} variant="outline" target="_blank" rel="noreferrer">
              Correo
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
