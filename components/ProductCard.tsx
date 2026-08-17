import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <Link className="product-card" href={`/products/${product.slug}`}>
      <div className="product-image">
        <Image
          src={product.image}
          alt={`${product.name}, ${product.series}`}
          fill
          sizes="(max-width: 720px) 50vw, 25vw"
          priority={priority}
        />
      </div>
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString("ru-RU")} руб.</p>
    </Link>
  );
}
