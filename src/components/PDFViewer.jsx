export function PDFViewer({ src, title }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
        <iframe title={title} src={src} className="h-full w-full" />
      </div>
      <a
        href={src}
        className="inline-flex w-full items-center justify-center rounded-full border border-brand-primary px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary/10 sm:w-auto"
        download
      >
        Descargar PDF
      </a>
    </div>
  )
}
