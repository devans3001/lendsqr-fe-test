// __tests__/UserTable.test.tsx
import { render, screen } from "@testing-library/react";
import UserTable from "@/components/UserTable"; // adjust your import
import React from "react";

describe("UserTable", () => {
  const headers = ["Name", "Email"];
  const data = [
    { id: "1", name: "Jane Doe", email: "jane@example.com" },
    { id: "2", name: "John Doe", email: "john@example.com" },
  ];

  it("renders title when provided", () => {
    render(
      <UserTable title="Test Table">
        <UserTable.Header
          data={headers}
          render={(item, i) => <th key={i}>{item}</th>}
        />
        <UserTable.Body
          data={data}
          render={(user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          )}
        />
      </UserTable>
    );

    expect(screen.getByRole("heading", { name: "Test Table" })).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });

  it("renders empty state when no data", () => {
    render(
      <UserTable title="Empty Table">
        <UserTable.Header
          data={headers}
          render={(item, i) => <th key={i}>{item}</th>}
        />
        <UserTable.Body
          data={[]}
          render={() => null}
        />
      </UserTable>
    );

    expect(screen.getByText("No data to show at the moment")).toBeInTheDocument();
  });
});
