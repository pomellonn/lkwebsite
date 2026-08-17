import Image from "next/image";
import Link from "next/link";
export function ImageSection({
  image,
  alt,
  label,
  title,
  copy,
  href,
  link,
  reverse = false,
}: {
  image: string;
  alt: string;
  label: string;
  title: string;
  copy?: string;
  href: string;
  link: string;
  reverse?: boolean;
}) {
  return (
    <section className={`image-section ${reverse ? "reverse" : ""}`}>
      <div className="feature-image">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 800px) 100vw, 66vw"
        />
      </div>
      <div className="feature-copy">
        <span className="eyebrow">{label}</span>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
        <Link className="text-link" href={href}>
          {link} →
        </Link>
      </div>
    </section>
  );
}
