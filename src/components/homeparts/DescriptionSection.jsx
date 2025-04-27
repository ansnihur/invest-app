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
            Invícta — платформа, що допомагає українцям, які постраждали 
            від війни, створювати стартапи та бізнеси замість втраченої роботи.
            Тут втрати перетворюються на можливості, а мрії — на нове життя.
            </p>
            </div>
        </div>
    )
}

export default DescriptionText;