const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mb-12 max-w-2xl">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">{eyebrow}</p>
    <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">{title}</h2>
    {description ? <p className="text-slate-600 dark:text-slate-400">{description}</p> : null}
  </div>
);

export default SectionHeading;
