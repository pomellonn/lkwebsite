"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
type MenuName = "products" | "about" | null;
const columns = [
  {
    title: "",
    links: [
      "Вся продукция",
      "Для приготовления",
      "Для сервировки",
      "Для хранения",
    ],
  },
  {
    title: "Коллекции",
    links: [
      "Оятские мотивы",
      "Огонек",
      "Мрамор",
      "Глинка",
      "Cream Stone",
      "ColorLife",
      "Ceramisu",
      "Сарриссино",
    ],
  },
];
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m15.5 15.5 5 5" />
  </svg>
);
const UserIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 21c.7-4.3 3.2-6.5 7.5-6.5s6.8 2.2 7.5 6.5" />
  </svg>
);
const BagIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 8.5h14l-1 13H6l-1-13Z" />
    <path d="M9 9V6a3 3 0 0 1 6 0v3" />
  </svg>
);
export function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuName>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    setMenu(null);
    setMobile(false);
  }, [pathname]);
  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector<HTMLElement>(
        ".home-hero, .production-hero",
      );
      const threshold = hero ? hero.offsetHeight : 10;
      setScrolled(window.scrollY > threshold - 4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);
  const open = (name: Exclude<MenuName, null>) => setMenu(name);
  return (
    <>
      <div
        className={`menu-backdrop ${menu ? "open" : ""}`}
        onMouseEnter={() => setMenu(null)}
        aria-hidden="true"
      />
      <header
        className={`header site-header-v2 ${menu ? "menu-open" : ""} ${scrolled ? "scrolled" : ""}`}
        onMouseLeave={() => setMenu(null)}
      >
        <Link className="wordmark" href="/" aria-label="Ломоносовская керамика">
          <img src="/logo.svg" alt="Ломоносовская керамика" />
        </Link>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <button
            className={menu === "products" ? "active" : ""}
            onMouseEnter={() => open("products")}
            onFocus={() => open("products")}
            onClick={() => setMenu(menu === "products" ? null : "products")}
            aria-expanded={menu === "products"}
          >
            Продукция
          </button>
          <button
            className={menu === "about" ? "active" : ""}
            onMouseEnter={() => open("about")}
            onFocus={() => open("about")}
            onClick={() => setMenu(menu === "about" ? null : "about")}
            aria-expanded={menu === "about"}
          >
            О нас
          </button>
          <Link
            href="/contacts"
            onMouseEnter={() => setMenu(null)}
            onFocus={() => setMenu(null)}
          >
            Контакты
          </Link>
        </nav>
        <nav className="header-actions icon-actions" aria-label="Инструменты">
          <Link
            href="/products"
            onMouseEnter={() => setMenu(null)}
            aria-label="Поиск"
          >
            <SearchIcon />
          </Link>

        
      
   

  
        </nav>
        <button
          className="mobile-menu-button"
          onClick={() => setMobile((v) => !v)}
          aria-expanded={mobile}
        >
          {mobile ? "Закрыть" : "Меню"}
        </button>
        <div
          className={menu === "products" ? "mega-menu open" : "mega-menu"}
          onMouseEnter={() => open("products")}
          aria-hidden={menu !== "products"}
        >
          <div className="mega-spacer" />
          {columns.map((c) => (
            <div className="mega-column" key={c.title}>
              <h2>{c.title}</h2>
              {c.links.map((label) => (
                <Link href="/products" key={label}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
          {/* <Link className="mega-feature" href="/products">
            <object data="/images/menu-feature.jpg" type="image/jpeg">
              <span>Вставьте фото</span>
              <code>public/images/menu-feature.jpg</code>
            </object>
            <span className="mega-eyebrow">Популярное</span>
            <strong>Коллекция «Мрамор»</strong>
          </Link> */}
        </div>
        <div
          className={
            menu === "about"
              ? "mega-menu about-menu open"
              : "mega-menu about-menu"
          }
          onMouseEnter={() => open("about")}
          aria-hidden={menu !== "about"}
        >
          <div className="mega-spacer" />
          <div className="mega-column">
            <h2>О компании</h2>
            <Link href="/#about">Ломоносовская керамика</Link>
            <Link href="/contacts">Контакты</Link>
          </div>
          <div className="mega-column">
            <h2>Истории</h2>
            <Link href="/lifestyle">Lifestyle</Link>
            <Link href="/production">Производство</Link>
          </div>
          {/* <Link className="mega-feature" href="/production">
            <object data="/images/menu-about.jpg" type="image/jpeg">
              <span>Вставьте фото</span>
              <code>public/images/menu-about.jpg</code>
            </object>
            <span className="mega-eyebrow">Производство</span>
            <strong>От материала до готового изделия</strong>
          </Link> */}
        </div>
      </header>
      <nav
        className={mobile ? "mobile-drawer open" : "mobile-drawer"}
        aria-label="Мобильная навигация"
      >
        <Link href="/products">Продукция</Link>
        <Link href="/lifestyle">Lifestyle</Link>
        <Link href="/production">Производство</Link>
        <Link href="/#about">О нас</Link>
        <Link href="/contacts">Контакты</Link>
      </nav>
    </>
  );
}
