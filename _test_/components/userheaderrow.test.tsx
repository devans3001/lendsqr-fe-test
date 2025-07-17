

import { render, screen, fireEvent } from "@testing-library/react";
import UserHeaderRow from "@/components/UserHeaderRow";
import { tableHeaders } from "@/utils/data";

describe("UserHeaderRow", () => {
  const mockFilterClick = jest.fn();
  const mockSortClick = jest.fn();

  it("renders the header text", () => {
    render(
      <table>
        <thead>
          <tr>
            <UserHeaderRow
              item="Organization"
              i={0}
              onFilterClick={mockFilterClick}
              onSortClick={mockSortClick}
            />
          </tr>
        </thead>
      </table>
    );

    expect(screen.getByText("Organization")).toBeInTheDocument();
  });

  it("renders filter icon if not last", () => {
    render(
      <table>
        <thead>
          <tr>
            <UserHeaderRow
              item="Organization"
              i={0}
              onFilterClick={mockFilterClick}
              onSortClick={mockSortClick}
            />
          </tr>
        </thead>
      </table>
    );

   fireEvent.click(screen.getByTitle("Filter Icon"));
  });

  it("does not render filter icon if last", () => {
    render(
      <table>
        <thead>
          <tr>
            <UserHeaderRow
              item=""
              i={tableHeaders.length - 1}
              onFilterClick={mockFilterClick}
              onSortClick={mockSortClick}
            />
          </tr>
        </thead>
      </table>
    );

    expect(screen.queryByRole("svg", { hidden: true })).toBeNull();
  });

  it("calls onFilterClick when filter icon clicked", () => {
    render(
      <table>
        <thead>
          <tr>
            <UserHeaderRow
              item="Organization"
              i={0}
              onFilterClick={mockFilterClick}
              onSortClick={mockSortClick}
            />
          </tr>
        </thead>
      </table>
    );

    fireEvent.click(screen.getByTitle("Filter Icon"));
    expect(mockFilterClick).toHaveBeenCalled();
  });

  it("calls onSortClick when header text clicked", () => {
    render(
      <table>
        <thead>
          <tr>
            <UserHeaderRow
              item="Organization"
              i={0}
              onFilterClick={mockFilterClick}
              onSortClick={mockSortClick}
            />
          </tr>
        </thead>
      </table>
    );

    fireEvent.click(screen.getByText("Organization"));
    expect(mockSortClick).toHaveBeenCalledTimes(1);
  });
});
