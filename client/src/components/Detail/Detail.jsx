import styles from './Detail.module.css';
import Nav from '../Nav/Nav';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

function Detail(props) {
    const allDogs = useSelector((state) => state.allDogs)
    const { id } = useParams();
    // eslint-disable-next-line eqeqeq
    const filteredDogs = allDogs.filter((dog) =>dog.id == id)
    const { name, height, weight, lifeSpan, image } = filteredDogs[0];
    return (
    <div className={styles.divCardContainer}>
        <Nav searchBarNavHidden='yes'/>
        <div className={styles.divCard} key={id}>
            <div className={styles.divImg}>
                <img src={image} alt={name + '-image'} />
            </div>
            <div className={styles.divSpecs}>
                <h2 className={styles.h2Name}>{ name }</h2>
                <h3 className={styles.h3Spec}>Height: {height.metric} cm</h3>
                <h3 className={styles.h3Spec}>Weight: {weight.metric} kgm</h3>
                <h3 className={styles.h3Spec}>Life Span: {lifeSpan}</h3>
            </div>
        </div>
    </div>

);
}

export default Detail;