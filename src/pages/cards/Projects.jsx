import { useRef } from 'react';
import FlipCard from '../../components/flipcard/FlipCard';
import { allProjects } from '../../data/projects';
import styles from './Projects.module.scss';
import BackgroundGradient from '../../components/background/BackgroundGradient';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const containerRef = useRef(null);

  const scroll = (offset) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.wrapper}>
      <BackgroundGradient />

      <button className={`${styles.arrow} ${styles.left}`} onClick={() => scroll(-300)}>
        <ChevronLeft size={32} />
      </button>

      <div ref={containerRef} className={styles.container}>
        {allProjects.map((item) => (
          <div key={item.id} className={styles.card}>
            <FlipCard data={item} />
          </div>
        ))}
      </div>

      <button className={`${styles.arrow} ${styles.right}`} onClick={() => scroll(300)}>
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default Projects;
