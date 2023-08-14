import { useState } from 'react';
import styles from './OrderBar.module.css'
import { useDispatch } from "react-redux";
import { filterByName, showAll, updateOrderParams } from '../../redux/actions';
import { BsBoxArrowInRight } from 'react-icons/bs';



export default function SearchBar(props) {
   // eslint-disable-next-line no-unused-vars
   const [key, setKey] = useState('');
   const dispatch = useDispatch()

   const onSearch = () => {
      key
      ? dispatch(filterByName(key))
      : dispatch(showAll())
   }

   const handleFilterProp = (event) => {
      dispatch(updateOrderParams({prop: event.target.value}))
   }

   const handleFilterMode = (event) => {
      dispatch(updateOrderParams({mode: event.target.value}))
   }

   return (
   <div className={styles.divWrap}>
      <div className={styles.selectGroup}>
         <p>Ordena por:</p>
         <select className={styles.optionGroupFilter} onChange={handleFilterProp}>
            <option className={styles.optionFilter} selected>Selecciona..</option>
            <option className={styles.optionFilter} value="name">Nombre</option>
            <option className={styles.optionFilter} value="height">Altura</option>
            <option className={styles.optionFilter} value="weight">Peso</option>
            <option className={styles.optionFilter} value="lifeSpan">Edad</option>
         </select>
      </div>
      <div className={styles.selectGroup}>
         <p>Selecciona el sentido:</p>
         <select className={styles.optionGroupFilter} onChange={handleFilterMode}>
               <option className={styles.optionFilter} value="asc" selected>Ascendente</option>
               <option className={styles.optionFilter} value="desc">Descendente</option>
         </select>
         <button className={styles.buttonSearch} onClick={() => onSearch()}><BsBoxArrowInRight size={12}/></button>
      </div>
   </div>
   );
}
