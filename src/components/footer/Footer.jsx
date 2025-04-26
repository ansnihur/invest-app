import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaInstagram, FaTelegram} from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          
          {/* Ліва частина */}
          <div className={styles.footer__left}>
            <Link to="/" className={styles.footer__logo}>
              🌱Nova Terra
            </Link>
            <div className={styles.footer__contacts}>
              <p><strong>Зв'яжіться з нами:</strong></p>
              <p>Пошта: info@gmail.com</p>
              <p>Телефон: 555-567-8901</p>
              <p>Адреса: 1234 Головна вул<br />Львів, Україна</p>
            </div>
          </div>

          {/* Права частина */}
          <div className={styles.footer__right}>
            <nav className={styles.footer__nav}>
              <Link to="/projects">Фонди</Link>
              <Link to="/investors">Інвесторам</Link>
              <Link to="/contacts">Контакти</Link>
            </nav>

            <div className={styles.footer__auth}>
              <Link to="/register" className={styles.footer__register}>Не маєш акаунту?</Link>
              <Link to="/login" className={styles.footer__login}>Вхід</Link>
            </div>

            <form className={styles.footer__subscribe}>
              <input type="email" placeholder="Email" />
              <button type="submit">Підпишись на новини</button>
            </form>
          </div>
        </div>

        {/* Нижня лінія футера */}
        <div className={styles.footer__bottom}>
          <p>© 2025 InvestApp. Всі права захищені.</p>
          <div className={styles.footer__socials}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTelegram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
