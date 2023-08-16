import styles from './About.module.css'
import myPhoto from '../../assets/1645715895585.jpg'
import Nav from '../Nav/Nav';

export default function About() {
    return (
        <div className={styles.divAbout}>
            <Nav searchBarNavHidden='yes'/>
            <div className={styles.divTitle}>
                <h1>WILLIAM GUICHA - FRONTEND DEVELOPER</h1>
            </div>
            <div className={styles.divImg}>
                <img className={styles.imgAbout} src={myPhoto} alt="Any"/>
            </div>
        </div>
    );

}