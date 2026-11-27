export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <header className="bg-navy pt-28 pb-12 text-snow">
      <div className="container-page">
        <p className="eyebrow text-ice">{eyebrow}</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl leading-[1.1] font-light sm:text-5xl">{title}</h1>
        <p className="mt-3 max-w-xl leading-relaxed text-ice">{intro}</p>
      </div>
    </header>
  );
}
