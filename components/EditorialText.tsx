import Link from "next/link";
export function EditorialText({
  children,
  link,
  href,
  id,
}: {
  children: React.ReactNode;
  link?: string;
  href?: string;
  id?: string;
}) {
  return (
    <section id={id} className="editorial">
      <div>
        <p>{children}</p>
        {link && href && (
          <Link className="text-link" href={href}>
            {link} →
          </Link>
        )}
      </div>
    </section>
  );
}
