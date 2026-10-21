import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/global.css";
import '../styles/reset.css'



function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="logo">ITLEO</h1>
        <button
          className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav id="main-navigation" className={`nav ${isMenuOpen ? "is-open" : ""}`}>
          <ul>
            <li><Link to="/">Головна</Link></li>
            <li><Link to="/about">Про нас</Link></li>
            <li><Link to="/prices">Ціни і відгуки</Link></li>
            <li><Link to="/contact">Контакти</Link></li>
            <li><Link to="/courses">Курси</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
