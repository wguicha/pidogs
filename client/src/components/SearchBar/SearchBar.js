import { useState } from 'react';
import styles from './SearchBar.module.css'
import { useDispatch } from "react-redux";
import { filterByName, showAll, updateOrderParams } from '../../redux/actions';



export default function SearchBar(props) {
   const [key, setKey] = useState('');
   const dispatch = useDispatch()

   const onSearch = () => {
      key
      ? dispatch(filterByName(key))
      : dispatch(showAll())
   }


   const handleChange = (event) => {
      setKey(event.target.value);
   }

   const handleFilterProp = (event) => {
      dispatch(updateOrderParams({prop: event.target.value}))
   }

   const handleFilterMode = (event) => {
      dispatch(updateOrderParams({mode: event.target.value}))
   }

   return (
      <div className={styles.divWrap}>
         <div className={styles.divSearch}>
            <input className={styles.inputSearch} onChange={handleChange} type='search' placeholder='Palabra clave..' />
            <button className={styles.buttonSearch} onClick={() => onSearch()}>Buscar</button>
            <i className="fa fa-search"></i>
            <label className={styles.labelFilter}>Choose to filter:</label>
         </div>
         <select className={styles.optionGroupFilter} onChange={handleFilterProp}>
            <option className={styles.optionFilter1} selected>Selecciona...</option>
            <option className={styles.optionFilter} value="name">Nombre</option>
            <option className={styles.optionFilter} value="height">Altura</option>
            <option className={styles.optionFilter} value="weight">Peso</option>
            <option className={styles.optionFilter} value="life_span">Edad</option>
         </select>
         <select className={styles.optionGroupFilter} onChange={handleFilterMode}>
            <option className={styles.optionFilter} value="asc">Ascendente</option>
            <option className={styles.optionFilter} value="desc">Descendente</option>
         </select>
         <button className={styles.buttonRandom}  onClick={() => onSearch()}>Ordenar</button>
      </div>
   );
}
