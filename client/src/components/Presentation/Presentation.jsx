import styles from './Presentation.module.css'
import dog from '../../assets/dogPresentation.png'
import { Link } from 'react-router-dom';


export default function Presentation() {

   return (
        <div className={styles.container}>
            <div className={styles.divButton}>
                <Link to="/home">
                    <button className={styles.button}>START</button>
                </Link>
            </div>
            <div className={styles.divImg}>
                <img src={dog} alt='Dog happy'/>
            </div>
        </div>
   );
}
