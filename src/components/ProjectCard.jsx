export default function ProjectCard({
  number,
  label,
  title,
  subtitle,
  description,
  tags,
  linkLabel,
  linkUrl,
  className = '',
}) {
  return (
    <article className={`project-card reveal-card ${className}`.trim()}>
      <div className="project-card__top">
        <span className="project-card__number">{number}</span>
        <span className="project-card__label">{label}</span>
      </div>

      <h2 className="project-card__title">{title}</h2>
      <p className="project-card__subtitle">{subtitle}</p>

      <div className="project-card__divider" aria-hidden="true" />

      <p className="project-card__description">{description}</p>

      <ul className="project-card__tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <a
        className="project-card__link"
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkLabel}
      </a>
    </article>
  )
}
