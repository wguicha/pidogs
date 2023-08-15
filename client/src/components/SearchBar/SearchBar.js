import { useState } from 'react';
import styles from './SearchBar.module.css'
import { useDispatch } from "react-redux";
import { filterByName, showAll, updateOrderParams } from '../../redux/actions';
import { FaSearch } from 'react-icons/fa';



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
   return (
      <div className={styles.searchBox}>
         <input type="text" className={styles.inputSearch} onChange={handleChange} placeholder="Escriba palabra clave..." />
         <button className={styles.btnSearch} onClick={() => onSearch()}><FaSearch size={12}/></button>
      </div>
   );
}
