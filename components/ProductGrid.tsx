import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
export function ProductGrid({
  products,
  priority = false,
}: {
  products: Product[];
  priority?: boolean;
}) {
  return (
    <div className="product-grid">
      {products.map((p, i) => (
        <ProductCard product={p} key={p.slug} priority={priority && i < 4} />
      ))}
    </div>
  );
}
