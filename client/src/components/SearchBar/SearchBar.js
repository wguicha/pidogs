import { useState } from 'react';
import styles from './SearchBar.module.css'
import { useDispatch } from "react-redux";
import { filterByName, showAll } from '../../redux/actions';



export default function SearchBar(props) {
   const [key, setKey] = useState('');

   const dispatch = useDispatch()

  // const { onSearch, onRandom, onClear } = props;
  const onSearch = () => {
    key
    ? dispatch(filterByName(key))
    : dispatch(showAll())
  } 


   const handleChange = (event) => {
      setKey(event.target.value);
   }
/*
   const handleClear = () => {
      onClear();
      dispatch(removeAll());
   }
*/
   return (
      <div className={styles.divWrap}>
         <div className={styles.divSearch}>
            <input className={styles.inputSearch} onChange={handleChange} type='search' placeholder='Palabra clave..' />
            <button className={styles.buttonSearch} onClick={() => onSearch()}>Buscar</button>
            <button className={styles.buttonRandom} /*onClick={() => onRandom()}*/
            >x10 Random</button>
            <button className={styles.buttonRandom} /*onClick={() => handleClear()}*/>Clear</button>
            <i className="fa fa-search"></i>
         </div>
      </div>
   );
}
