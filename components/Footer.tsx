import Link from 'next/link';

export function Footer() {
  return (
    <footer id="contacts" className="footer footer-v2">
      <div className="footer-main">
        <nav className="footer-column" aria-label="Компания">
          <h2>Компания</h2>
          <Link href="/#about">О нас</Link>
          <Link href="/production">Производство</Link>
          <Link href="/lifestyle">Lifestyle</Link>
          <Link href="/contacts">Контакты</Link>
        </nav>
        <nav className="footer-column" aria-label="Покупателям">
          <h2>Покупателям</h2>
          <Link href="/products">Продукция</Link>
          <Link href="/products">Коллекции</Link>
          <Link href="/contacts">Где купить</Link>
          <a href="#privacy">Конфиденциальность</a>
          <a href="#terms">Условия использования</a>
        </nav>
        <nav className="footer-column" aria-label="Социальные сети">
          <h2>Мы в сети</h2>
          <a href="#">Instagram</a>
          <a href="mailto:info@example.ru">Email</a>
        </nav>
        {/* <section className="footer-subscribe" aria-labelledby="subscribe-title">
          <h2 id="subscribe-title">Оставайтесь на связи</h2>
          <p>Оставьте электронную почту, чтобы узнавать о новых коллекциях, историях производства и керамике для дома.</p>
          <form>
            <input aria-label="Электронная почта" id="footer-email" name="email" type="email" autoComplete="email" placeholder="Электронная почта" required />
            <button type="submit" aria-label="Подписаться">→</button>
          </form>
        </section> */}
      </div>
      <div className="footer-floor">
        <p>2026 © Все права защищены</p>
        <p>Ломоносовская керамика</p>
        {/* <img className="footer-logo" src="/logo.svg" alt="Ломоносовская керамика" /> */}
      </div>
    </footer>
  );
}
