import { useState } from 'react';
import css from './Header.module.scss';
import logo from '../../../assets/images/logo-stackmedia-.webp';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={css.header}>
      <img src={logo} alt="Logo" className={css.logo} />

      <nav className={`${css.nav} ${menuOpen ? css.open : ''}`}>
        <ul className={css.navList}>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Proyectos</a></li>
          <li><a href="#">Sobre mí</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>

      <div className={css.burger} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>
    </header>
  );
};

export default Header;
