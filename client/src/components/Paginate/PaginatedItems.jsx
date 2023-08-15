import ReactPaginate from 'react-paginate';
import styles from './PaginatedItems.module.css'
import { useDispatch, useSelector } from "react-redux";
import { updatePages } from '../../redux/actions'

export default function PaginatedItems() {

  const { pages } = useSelector((state) => state)
  const dispatch = useDispatch()
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
        breakClassName={styles.containerPagesNum}
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageLinkClassName={styles.itemPagesNum}
        breakLinkClassName={styles.itemPagesNum}
        previousLinkClassName={styles.itemPagesNum}
        nextLinkClassName={styles.itemPagesNum}
        activeLinkClassName={styles.itemActPage}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
