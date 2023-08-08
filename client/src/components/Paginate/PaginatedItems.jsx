import ReactPaginate from 'react-paginate';
import styles from './PaginatedItems.module.css'
import { useDispatch, useSelector } from "react-redux";
import { updatePages } from '../../redux/actions'

export default function PaginatedItems() {

  const { pages } = useSelector((state) => state)
  const dispatch = useDispatch()
  //const endOffset = pages.itemOffset + pages.itemsPerPage;

  //console.log(`Loading items from ${pages.itemOffset} to ${endOffset}, total items: ${pages.itemsLength}`);

  const pageCount = Math.ceil(pages.itemsLength / pages.itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * pages.itemsPerPage) % pages.itemsLength;
    dispatch(updatePages(newOffset));
  };

  return (
    <>
      <ReactPaginate
        containerClassName={styles.containerPagesNum}
        breakLabel="..."
        breakClassName={styles.break}
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageClassName={styles.itemPagesNum}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
