import styles from './SearchBar.module.css'
import { useDispatch, useSelector } from "react-redux";
import { filterByName, showAll, updateSearchKey } from '../../redux/actions';
import { FaSearch } from 'react-icons/fa';



export default function SearchBar(props) {
   const searchKey = useSelector((state) => state.searchKey)
   const dispatch = useDispatch()

   const onSearch = () => {
      searchKey
      ? dispatch(filterByName(searchKey))
      : dispatch(showAll())
   }


   const handleChange = (event) => {
      dispatch(updateSearchKey(event.target.value));
   }
   return (
      <div className={styles.searchBox}>
         <input type="text" className={styles.inputSearch} onChange={handleChange} placeholder="Escriba palabra clave..." />
         <button className={styles.btnSearch} onClick={() => onSearch()}><FaSearch size={12}/></button>
      </div>
   );
}
