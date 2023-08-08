import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'

export default function Nav(props) {
   //const { onSearch, onRandom, onClear } = props;
   //onSearch={onSearch} onRandom={onRandom} onClear={onClear}
   return (
        <div className={styles.divNav}>
            <Link to="/home">
                <button className={styles.buttonNav1}>HOME</button>
            </Link>
            <Link to="/newdog">
                <button className={styles.buttonNav2}>AGREGA TU RAZA</button>
            </Link>
            <Link to="/about">
                <button className={styles.buttonNav2}>ABOUT</button>
            </Link>
            <SearchBar className={styles.searchBarNav}/>
        </div>
   );
}
