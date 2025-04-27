import React from 'react';
import styles from './PeopleSection.module.scss';
import cn from 'classnames';
import person1 from '../../assets/images/person1.jpg';
import person2 from '../../assets/images/person2.jpg';

const PeopleSection = () => {
  return (
    <section className={styles.storiesSection}>
        <h2 className={styles.storiesTitle}>Історії незламних</h2>

        <div className={styles.storiesCards}>
            <div className={cn(styles.storyCard, styles.orange)}>
            <img
                src={person1}
                alt="Історія Олексія"
                className={styles.storyImg}
            />
            <div className={styles.storyContent}>
                <h3 className={styles.storyName}>Історія Олексія</h3>
                <p className={styles.storyText}>
                «Після повернення з фронту я зрозумів: найкраще, що я можу зробити
                для своїх побратимів — створити можливості для навчання та роботи.
                Так народився фонд “Код Перемоги”, який навчає ветеранів IT-спеціальностям…
                </p>
            </div>
            </div>

            <div className={cn(styles.storyCard, styles.purple)}>
            <img
                src={person2}
                alt="Історія Максима"
                className={styles.storyImg}
            />
            <div className={styles.storyContent}>
                <h3 className={styles.storyName}>Історія Максима</h3>
                <p className={styles.storyText}>
                «Народившись із інвалідністю, я завжди вірив, що обмеження — це не вирок. Я створив "Сильніші Разом" — фонд, який будує реабілітаційні центри для ветеранів та людей з інвалідністю. Ми об'єднуємо бізнес, громаду та лікарів, щоб допомогти кожному знайти свою силу і шлях до повноцінного життя.…"
                </p>
            </div>
            </div>
        </div>
    </section>
  )
};

export default PeopleSection;
