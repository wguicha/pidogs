import styles from './Kard.module.css'

function Card(props) {
   const { id, name, height, weight, lifeSpan, image } = props.dog;
   return (
      <div className={styles.divCardContainer}>
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
/*
            <Link to={`/detail/${id}`}>
               <div className={styles.divName}>
                  <h2 className={styles.h2Name}>{ name }</h2>
               </div>
            </Link>
            <div className={styles.divOriginName}>
               <h2 className={styles.h2OriginName}>Height: {height}</h2>
               <h2 className={styles.h2OriginName}>Weight: {weight}</h2>
               <h2 className={styles.h2OriginName}>Life Span: {lifeSpan}</h2>
            </div>


export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites,
   }
}

export  function mapDispatchToProps(dispatch){
   return {
      addFav: function(character){
         dispatch(addFav(character));
      },
      removeFav: function(id){
         dispatch(removeFav(id));
      },
   }
}
*/
//export default connect(mapStateToProps, mapDispatchToProps)(Card);
export default Card;