import styles from './PageNotFound.module.css'
import myPhoto from '../../assets/404NotFoundimg.png'
import Nav from '../Nav/Nav';

export default function PageNotFound() {
    console.log("not found")
    return (
        <div className={styles.divContainer}>
            <Nav searchBarNavHidden='yes'/>
            <div className={styles.divTitle}>
                <h1>PAGE NOT FOUND</h1>
            </div>
            <div className={styles.divImg}>
                <img className={styles.img404} src={myPhoto} alt="Any"/>
            </div>
        </div>
    );

}