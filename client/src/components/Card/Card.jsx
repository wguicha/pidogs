import styles from './Kard.module.css'
import { Link } from 'react-router-dom';

function Card(props) {
   const { id, name, height, weight, lifeSpan, image } = props.dog;
   return (

         <div className={styles.divCardContainer}>
            <Link to={`/detail/${id}`} >
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
            </Link>
         </div>

   );
}

export default Card;