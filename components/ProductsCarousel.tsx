"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Item = { name: string; file: string };

const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </svg>
);

export function ProductsCarousel({ items }: { items: Item[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumb, setThumb] = useState({ width: 100, left: 0 });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const updateThumb = () => {
      const max = el.scrollWidth - el.clientWidth;
      const width = (el.clientWidth / el.scrollWidth) * 100;
      const left = max > 0 ? (el.scrollLeft / max) * (100 - width) : 0;
      setThumb({ width, left });
    };
    updateThumb();
    el.addEventListener("scroll", updateThumb, { passive: true });
    window.addEventListener("resize", updateThumb);
    return () => {
      el.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const amount = card ? card.getBoundingClientRect().width + 18 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <>
      <div className="home-products-grid" ref={trackRef}>
        {items.map((item) => (
          <article key={item.file}>
            <div className="product-photo">
              <Image src={`/images/${item.file}`} alt={item.name} fill sizes="(max-width: 800px) 50vw, 20vw" />
            </div>
            <p>{item.name}</p>
          </article>
        ))}
      </div>
      <div className="home-products-scroll">
        <div className="home-products-arrows">
          <button type="button" aria-label="Прокрутить назад" onClick={() => scroll(-1)}>
            <ArrowIcon direction="left" />
          </button>
          <button type="button" aria-label="Прокрутить вперёд" onClick={() => scroll(1)}>
            <ArrowIcon direction="right" />
          </button>
        </div>
        <div className="home-products-track">
          <span style={{ width: `${thumb.width}%`, left: `${thumb.left}%` }} />
        </div>
      </div>
    </>
  );
}
