import Card from '../Card/Card';
import Nav from '../Nav/Nav';
import OrderBar from '../OrderBar/OrderBar';
import styles from './Cards.module.css'
import { useSelector } from "react-redux";
import PaginatedItems from '../Paginate/PaginatedItems';

export default function Cards() {
   const { dogs, pages } = useSelector((state) => state)
   const partialDogs = dogs.slice(pages.itemOffset, pages.itemOffset + pages.itemsPerPage)

   return (
      <div className={styles.cardsContainer}>
         <Nav />
         <OrderBar />
         <div className={styles.divCards}>{
            partialDogs.map((dog) => {
               return <Card dog={dog} key={dog.id}/>
            })
         }
         </div>
         <div className={styles.pageNum}>
            <PaginatedItems />
         </div>
      </div>
   );
}