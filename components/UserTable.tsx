"use client";

import { createContext, useContext, ReactNode } from "react";

interface TableContextType {
  title: string | undefined;
}

const UserTableContext = createContext<TableContextType | undefined>(undefined);

export default function UserTable({
  title,
  children,
}: {
  title?: string | undefined;
  children: ReactNode;
}) {
  return (
    <UserTableContext.Provider value={{ title }}>
      <div className="userTableWrapper">
        {title && <Title>{title}</Title>}
        <table className="userTable">{children}</table>
      </div>
    </UserTableContext.Provider>
  );
}

function Title({ children }: { children: ReactNode }) {
  return <h3 className="userTableTitle">{children}</h3>;
}

function Header<T>({
  data = [],
  render,
}: {
  data: T[];
  render: (item: T, i: number) => ReactNode;
}) {
  return (
    <thead className="userTableHead">
      <Row>{data.map(render)}</Row>
    </thead>
  );
}

function Body<T>({
  data = [],
  render,
}: {
  data: T[];
  render: (user: T) => ReactNode;
}) {
 if (!data.length) {
    return (
      <tbody className="userTableBody">
        <tr>
          <td colSpan={100} className="userTableEmpty">
            No data to show at the moment
          </td>
        </tr>
      </tbody>
    );
  }

  return <tbody className="userTableBody">{data?.map(render)}</tbody>;
}

function Row({ children }: { children: ReactNode }) {
  return <tr className="">{children}</tr>;
}


UserTable.Header = Header;
UserTable.Body = Body;
UserTable.Row = Row;

export function useUserTable() {
  const context = useContext(UserTableContext);

  if (!context)
    throw new Error("UserTable Provider isn't in the correct location");
  return context;
}
