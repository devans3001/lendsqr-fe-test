"use client";
import UserCard from "@/components/card";
import style from "./users.module.css";
import UserTable from "@/components/UserTable";
import { cards, dummyData, tableHeaders } from "@/utils/data";
import UserHeaderRow from "@/components/UserHeaderRow";
import { useState } from "react";
import FilterPanel from "@/components/FilterPanel";
import UserTableRow from "@/components/UserTableRow";

function User() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <>
      <div className={style.container}>
        <h1>User</h1>
        <div className={style.userCards}>
          {cards.map((card) => (
            <UserCard key={card.title} card={card} />
          ))}
        </div>

        <UserTable>
          <UserTable.Header
            data={tableHeaders}
            render={(item, i) => (
              <UserHeaderRow
                key={item}
                item={item}
                i={i}
                onFilterClick={() => setIsFilterOpen(true)}
              />
            )}
          />
          <UserTable.Body
            data={dummyData}
            render={(user) => <UserTableRow key={user.name} user={user} />}
          />
        </UserTable>
      </div>
      <FilterPanel isOpen={isFilterOpen} setIsOpen={setIsFilterOpen} />
    </>
  );
}

export default User;
