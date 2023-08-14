import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
   return (
    <div className={styles.divNav}>
        <div className={styles.navGroup}>
            <SearchBar className={styles.searchBarNav}/>
        </div>
        <div className={styles.navGroup}>
            <Link to="/home" className={styles.linkNav}>
                <li className={styles.linkNav}>Home</li>
            </Link>
        </div>
        <div className={styles.navGroup}>
            <Link to="/newdog" className={styles.linkNav}>
                <li className={styles.linkNav}>Agrega tu raza</li>
            </Link>
        </div>
        <div className={styles.navGroup}>
            <Link to="/about" className={styles.linkNav}>
                <li className={styles.linkNav}>Acerca de</li>
            </Link>
        </div>
    </div>
   );
}
