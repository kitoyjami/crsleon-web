export function KPICounter({ items }) {
  return (
    <dl className="grid gap-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-sm font-semibold text-neutral-500">{item.label}</dt>
          <dd className="mt-2 text-3xl font-semibold text-brand-primary">{item.value}</dd>
          {item.caption && <p className="mt-2 text-xs text-neutral-500">{item.caption}</p>}
        </div>
      ))}
    </dl>
  )
}
