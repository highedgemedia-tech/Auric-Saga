export default function PageEditorialImage({ src, alt, eyebrow, title, copy, details = [] }) {
  return (
    <figure className="page-editorial-image scroll-reveal">
      <div className="page-editorial-image__media">
        <img src={src} alt={alt} loading="lazy" />
      </div>
      <figcaption className="stack">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h3>{title}</h3>}
        {copy && <p>{copy}</p>}
        {details.length > 0 && (
          <div className="page-editorial-image__details">
            {details.slice(0, 3).map((detail) => (
              <div key={detail.title}>
                <strong>{detail.title}</strong>
                <span>{detail.copy}</span>
              </div>
            ))}
          </div>
        )}
      </figcaption>
    </figure>
  );
}
