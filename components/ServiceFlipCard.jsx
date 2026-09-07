import Link from "next/link";

export default function ServiceFlipCard({ href, title, description, actionLabel = "Explore consultation" }) {
  return (
    <Link className="service-flip-card scroll-reveal" href={href}>
      <span className="service-flip-card__inner">
        <span className="service-flip-card__face service-flip-card__front">
          <span className="service-flip-card__title">{title}</span>
        </span>
        <span className="service-flip-card__face service-flip-card__back">
          <span className="service-flip-card__copy">{description}</span>
          <span className="text-link">{actionLabel}</span>
        </span>
      </span>
    </Link>
  );
}
