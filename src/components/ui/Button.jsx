import clsx from 'clsx'

const styles = {
  primary:
    'inline-flex items-center justify-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
  outline:
    'inline-flex items-center justify-center rounded-full border border-brand-primary px-5 py-2.5 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
  ghost:
    'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
}

export function Button({ as = 'button', variant = 'primary', className, children, ...props }) {
  const Component = as

  return (
    <Component className={clsx(styles[variant], className)} {...props}>
      {children}
    </Component>
  )
}
