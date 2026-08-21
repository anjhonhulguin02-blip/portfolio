export default function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="display mt-3 text-3xl text-ink sm:text-[2.5rem]">{title}</h2>
        {description && (
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
