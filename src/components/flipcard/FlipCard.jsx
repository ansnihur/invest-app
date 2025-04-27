import { useState } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import styles from './FlipCard.module.scss';
import { useAuth } from '../../context/AuthContext';

const FlipCard = ({ data }) => {
  const [flipped, setFlipped] = useState(false);
  const [showAgreement, setShowAgreement] = useState(false);
  const { user, toggleFavorite } = useAuth();
  const isFav = user?.favorites?.some(p => p.id === data.id);

  const handleFlip = (e) => {
    e.stopPropagation();
    setFlipped(f => !f);
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    if (!user) {
      alert('Будь ласка, увійдіть, щоб додавати в уподобані');
      return;
    }
    toggleFavorite(data);
  };

  const handleInvest = (e) => {
    e.stopPropagation();
    if (!user) {
      alert('Будь ласка, увійдіть у акаунт, щоб інвестувати');
      return;
    }
    setShowAgreement(true);
  };

  const acceptAgreement = () => {
    setShowAgreement(false);
    window.open('https://www.sandbox.paypal.com', '_blank');
  };

  const declineAgreement = () => {
    setShowAgreement(false);
  };

  return (
    <div className={styles.flipCard}>
      <div
        className={`${styles.bookmarkIcon} ${isFav ? styles.selected : ''}`}
        onClick={handleBookmark}
      >
        {isFav ? <BookmarkCheck size={24}/> : <Bookmark size={24}/> }
      </div>

      <div className={`${styles.inner} ${flipped ? styles.flipped : ''}`}>
        {/* FRONT */}
        <div className={styles.front} onClick={handleFlip}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${data.image})` }}
          />
          <div className={styles.info}>
            <h5>{data.title}</h5>
            <div className={styles.subtitle}>
              {data.subtitle.split('\n').map((line, index) => {
                const [label, ...rest] = line.split(':');
                return (
                  <p key={index}>
                    <strong>{label}:</strong> {rest.join(':').trim()}
                  </p>
                );
              })}
            </div>
            <button className={styles.btn}>Натисни для деталей</button>
          </div>
        </div>

        {/* BACK */}
        <div className={styles.back} onClick={handleFlip}>
          <div className={styles.details}>
            {data.details.split('\n').map((line, i) => {
              const [label, ...rest] = line.split(':');
              return (
                <p key={i}>
                  <strong>{label}:</strong> {rest.join(':').trim()}
                </p>
              );
            })}
          </div>
          <div className={styles.backButtons}>
            <button className={styles.btn} onClick={handleInvest}>Інвестувати</button>
            <button className={styles.btnSecondary}>Назад</button>
          </div>
        </div>
      </div>

      {showAgreement && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h5>Угода Інвестора</h5>
            <p>Я, діючи добровільно та усвідомлено, підтверджую свою згоду на інвестування коштів у зазначений проєкт.</p>
            <p>Я розумію можливі ризики, включаючи можливість втрати інвестованих коштів.</p>
            <p>Я погоджуюсь із усіма умовами та приймаю їх без застережень.</p>
            <div className={styles.modalButtons}>
              <button onClick={acceptAgreement} className={styles.agreeButton}>Погоджуюсь та інвестую</button>
              <button onClick={declineAgreement} className={styles.cancelButton}>Скасувати</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlipCard;
