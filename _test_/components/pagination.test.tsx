

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "@/components/PaginationControls";

describe("Pagination Component", () => {
  const defaultProps = {
    pageSize: 10,
    total: 50,
    currentPage: 2,
    totalPages: 5,
    onPageSizeChange: jest.fn(),
    onPageChange: jest.fn(),
  };

  it("renders correct page numbers", () => {
    render(<Pagination {...defaultProps} />);
    // Should see buttons 1 to 5
    expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "5" })).toBeInTheDocument();
  });

  it("calls onPageChange when a page is clicked", () => {
    render(<Pagination {...defaultProps} />);
    fireEvent.click(screen.getByRole("button", { name: "3" }));
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(3);
  });

  it("prev button works and disables on first page", () => {
    const props = { ...defaultProps, currentPage: 1 };
    render(<Pagination {...props} />);
    const prevButton = screen.getByRole("prev", { name: "" }); 
    expect(prevButton).toBeDisabled();
  });

  it("next button works and disables on last page", () => {
    const props = { ...defaultProps, currentPage: 5 };
    render(<Pagination {...props} />);
    const nextButton = screen.getByRole("next");
    expect(nextButton).toBeDisabled();
  });

  it("calls onPageSizeChange when page size changes", () => {
    render(<Pagination {...defaultProps} />);
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "25" },
    });
    expect(defaultProps.onPageSizeChange).toHaveBeenCalledWith(25);
  });
});
