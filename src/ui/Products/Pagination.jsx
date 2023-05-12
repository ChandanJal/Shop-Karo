import Link from "next/link";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import _ from "lodash";

export default function Pagination({ totalItems, totalPages, currentPage, onPageChange, onNext, onPrev }) {
  const handlePageChange = (i) => {
    onPageChange(i);
  };

  if (totalPages === 1) return false;

  return (
    <div className="pagination d-flex justify-content-end">
      <ul className="pagination-list">
        <li key={`_pagination_left`}>
          <a onClick={onPrev}>
            <BsChevronLeft />
          </a>
        </li>

        {_.range(1, totalPages + 1).map((i) => (
          <li className="pagination-list-item" key={`_pagination_${i}`}>
            <a className={`${currentPage === i ? "active" : ""}`} onClick={() => handlePageChange(i)}>
              {i}
            </a>
          </li>
        ))}

        <li className={`_pagination_right`}>
          <a onClick={onNext}>
            <BsChevronRight />
          </a>
        </li>
      </ul>
    </div>
  );
}
