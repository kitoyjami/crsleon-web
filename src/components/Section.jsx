import clsx from 'clsx'

export function Section({ id, title, eyebrow, description, children, background = 'white' }) {
  const isDark = background === 'dark'
  const backgroundClass =
    background === 'muted' ? 'bg-neutral-50' : isDark ? 'bg-brand-dark text-white' : 'bg-white'

  return (
    <section id={id} className={backgroundClass}>
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p
              className={clsx(
                'text-xs font-semibold uppercase tracking-[0.2em]',
                isDark ? 'text-white/70' : 'text-brand-primary',
              )}
            >
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className={clsx('mt-4 text-lg', isDark ? 'text-white/80' : 'text-neutral-600')}>
              {description}
            </p>
          )}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}
