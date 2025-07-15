"use client";

import { ChangeEvent } from "react";
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";

type PaginationProps = {
  pageSize: number;
  total: number;
  currentPage: number;
  totalPages: number;
  onPageSizeChange: (size: number) => void;
  onPageChange: (page: number) => void;
  pageSizeOptions?: number[];
};

export function Pagination({
  pageSize,
  total,
  currentPage,
  totalPages,
  onPageSizeChange,
  onPageChange,
  pageSizeOptions = [10, 25, 50, 100],
}: PaginationProps) {
  const pages: (number | string)[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  return (
    <div className="pagination">
      <div className="page-size-selector">
        <span>Showing</span>
        <select
          value={pageSize}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            onPageSizeChange(Number(e.target.value))
          }
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span>out of {total}</span>
      </div>

      <div className="pagination-controls">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
         <MdKeyboardArrowLeft size={18}/>
        </button>

        {pages.map((page, idx) =>
          page === "..." ? (
            <span key={`ellipsis-${idx}`}>...</span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(Number(page))}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          <MdKeyboardArrowRight size={18}/>
        </button>
      </div>
    </div>
  );
}
