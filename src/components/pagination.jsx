import React from "react";

const Pagination = ({ page, setPage, pagesCount }) => {
  return (
    <div className="flex flex-row justify-center py-8">
      {[...Array(pagesCount)].map((_, i) => {
        var style =
          page === i
            ? "bg-slate-700 text-white"
            : "text-slate-700 border-2 border-slate-700";
        return (
          <span
            key={i}
            className={`${style} text-lg text-center mx-1 rounded-lg cursor-pointer w-8 h-8`}
            onClick={() => setPage(i)}
          >
            {i + 1}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
