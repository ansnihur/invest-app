import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import styles from './Navbar.module.scss';
import logo from '../../assets/icons/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
    setLogoutMessage('Ви успішно вийшли!');
    setTimeout(() => {
      setLogoutMessage('');
      navigate('/');
    }, 2000);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/" onClick={closeMenu}>
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>

          <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
            <Link to="/projects" onClick={closeMenu}>Проєкти</Link>
            <Link to="/analytics" onClick={closeMenu}>Аналітика</Link>
            <Link to="/contacts" onClick={closeMenu}>Відгуки</Link>

            <div className={styles.authButtons}>
              {user ? (
                <>
                  {user.role === 'admin' ? (
                    <Link to="/admin" onClick={closeMenu}>
                      Адмін-панель
                    </Link>
                  ) : (
                    <Link to="/profile" onClick={closeMenu}>
                      Профіль
                    </Link>
                  )}
                  <button onClick={handleLogout}>
                    Вийти
                  </button>
                </>
              ) : (
                <>
                  <Link to="/register" className={styles.register} onClick={closeMenu}>
                    Не маєш акаунту?
                  </Link>
                  <Link to="/login" className={styles.login} onClick={closeMenu}>
                    Вхід
                  </Link>
                </>
              )}
            </div>
          </nav>

          <div
            className={`${styles.burger} ${isOpen ? styles.burgerWhite : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {logoutMessage && (
          <div className={styles.logoutMessage}>
            {logoutMessage}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
