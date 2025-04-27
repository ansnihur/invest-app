//import { useNavigate } from 'react-router-dom'
import styles from './DescriptionSection.module.scss'

const DescriptionText = () => {
    return (
        <div className={styles.description}>
            <h2 className={styles.title}>
                Чим це корисно?
            </h2>
            <div className={styles.block}>
            <p className={styles.text}>
            Invícta — платформа, що допомагає ветеранам та людям з обмеженими можливостями створювати власні стартапи та бізнеси замість звичної роботи. Тут втрачені можливості перетворюються на нові починання, а мрії — на нове життя.
            </p>
            </div>
        </div>
    )
}

export default DescriptionText;