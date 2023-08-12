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
         </div>
      </div>
   );
}
