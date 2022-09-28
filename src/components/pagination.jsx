import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pagination = ({ page, setPage, pagesCount }) => {
  const handleNextPage = () => {
    if (page < pagesCount) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="flex flex-row justify-center py-8 text-sky-900">
      <FontAwesomeIcon
        icon={faChevronLeft}
        onClick={handlePrevPage}
        className={`w-5 h-5  text-white rounded-full p-1.5 ${
          page === 1
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-sky-900 cursor-pointer"
        }`}
      />

      <div className="text-lg font-semibold mx-4">{`${page} of ${pagesCount}`}</div>

      <FontAwesomeIcon
        icon={faChevronRight}
        onClick={handleNextPage}
        className={`w-5 h-5  text-white rounded-full p-1.5 ${
          page === pagesCount
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-sky-900 cursor-pointer"
        }`}
      />
    </div>
  );
};

export default Pagination;
