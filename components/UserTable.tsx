
"use client";

import { createContext, useContext, ReactNode } from "react";

interface TableContextType {
  title: string | undefined;
}

const UserTableContext = createContext<TableContextType | undefined>(undefined);

export default function UserTable({
  title,
  rows,
  children,
}: {
  title?: string | undefined;
  rows?:number
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
  render: (item: T, i:number) => ReactNode;
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
  render: (item: T, index: number) => ReactNode;
}) {
  if (!data.length) return <p className="userTableEmpty">No data to show at the moment</p>;

  return <tbody className="userTableBody">{data.map(render)}</tbody>;
}

function Row({ children }: { children: ReactNode }) {
  return <tr>{children}</tr>;
}

UserTable.Header = Header;
UserTable.Body = Body;
UserTable.Row = Row;


export function useUserTable(){
    const context = useContext(UserTableContext)

    if(!context) throw new Error("UserTable Provider isn't in the correct location")
    return context
}