import { useRef } from 'react';
import FlipCard from '@/components/FlipCard/FlipCard';
import styles from './Projects.module.scss';

const sampleData = [
  { id: 1, image: '/img1.jpg', title: 'Green Hills Residence', subtitle: 'Місто: Київ (Ірпінь)', details: 'Мін. сума: 500 $\nДата: 15 червня 2025', },
  { id: 2, image: '/img2.jpg', title: 'StartUA', subtitle: 'Місто: Львів', details: 'Категорія: Стартапи\nЦіль: інвестувати в 10+ стартапів', },
  { id: 3, image: '/img3.jpg', title: 'Green Hills Residence', subtitle: 'Місто: Київ (Ірпінь)', details: 'Мін. сума: 500 $\nДата: 15 червня 2025', },
  { id: 4, image: '/img4.jpg', title: 'StartUA', subtitle: 'Місто: Львів', details: 'Категорія: Стартапи\nЦіль: інвестувати в 10+ стартапів', },
];

const Projects = () => {
  const ref = useRef(null);
  const scroll = (offset) => ref.current.scrollBy({ left: offset, behavior: 'smooth' });

  return (
    <div className={styles.wrapper}>
      <button className={styles.arrow} onClick={() => scroll(-250)}>◀</button>
      <div ref={ref} className={styles.container}>
        {sampleData.map(item => (
          <div key={item.id} className={styles.card}>
            <FlipCard data={item} />
          </div>
        ))}
      </div>
      <button className={styles.arrow} onClick={() => scroll(250)}>▶</button>
    </div>
  );
};

export default Projects;

