// src/components/flipcard/FlipCard.jsx
import { useState } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import styles from './FlipCard.module.scss';
import { useAuth } from '../../context/AuthContext';

const FlipCard = ({ data }) => {
  const [flipped, setFlipped] = useState(false);
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

  return (
    <div className={styles.flipCard}>
      <div
        className={`${styles.bookmarkIcon} ${isFav ? styles.selected : ''}`}
        onClick={handleBookmark}
      >
        {isFav ? <BookmarkCheck size={24}/> : <Bookmark size={24}/> }
      </div>

      <div className={`${styles.inner} ${flipped ? styles.flipped : ''}`}>
        <div className={styles.front} onClick={handleFlip}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${data.image})` }}
          />
          <div className={styles.info}>
            <h3>{data.title}</h3>
            <p>{data.subtitle}</p>
            <button className={styles.btn}>ⓘ детальніше</button>
          </div>
        </div>

        <div className={styles.back} onClick={handleFlip}>
          <div className={styles.details}>
            {data.details.split('\n').map((line, i) => <p key={i}>{line}</p>)}
          </div>
          <button className={styles.btn}>Назад</button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
