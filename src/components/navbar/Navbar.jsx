import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            🌱Nova Terra
          </Link>

          <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
            <Link to="/projects" onClick={closeMenu}>Фонди</Link>
            <Link to="/analytics" onClick={closeMenu}>Аналітика</Link>
            <Link to="/contacts" onClick={closeMenu}>Контакти</Link>
            <div className={styles.authButtons}>
              <Link to="/register" className={styles.register} onClick={closeMenu}>
                Не маєш акаунту?
              </Link>
              <Link to="/login" className={styles.login} onClick={closeMenu}>
                Вхід
              </Link>
            </div>
          </nav>

          {/* Бургер-меню */}
          <div
            className={`${styles.burger} ${isOpen ? styles.burgerWhite : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
