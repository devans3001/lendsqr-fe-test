"use client";
import UserCard from "@/components/card";
import style from "./users.module.css";
import UserTable from "@/components/UserTable";
import { tableHeaders } from "@/utils/data";
import UserHeaderRow from "@/components/UserHeaderRow";
import { useEffect, useState } from "react";
import FilterPanel from "@/components/FilterPanel";
import UserTableRow from "@/components/UserTableRow";
import { useUser } from "@/hooks/useUsers";
import { Pagination } from "@/components/PaginationControls";
import { getUserCards } from "@/utils/getUserCards";
import { UserTableValueType } from "@/types/type";
import { filterUsers } from "@/utils/filterUser";
import UsersSkeleton from "./UsersSkeleton";

function User() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<Partial<UserTableValueType>>({});
  const { users, isPending } = useUser();

//   const filteredUsers = users.filter((user) => {
//   if (filters.organization && user.tableData.organization.toLocaleLowerCase() !== filters.organization) {
//     return false;
//   }
//   if (filters.name && !user.tableData.name.toLowerCase().includes(filters.name.toLowerCase())) {
//     return false;
//   }
//   if (filters.email && !user.tableData.email.toLowerCase().includes(filters.email.toLowerCase())) {
//     return false;
//   }
//   if (filters.phone && !user.tableData.phone.includes(filters.phone)) {
//     return false;
//   }
//   if (filters.date && user.tableData.date !== filters.date) {
//     return false;
//   }
//   if (filters.status && user.tableData.status !== filters.status) {
//     return false;
//   }
//   return true;
// });

const filteredUsers = filterUsers(users, filters);
console.log(filters)


  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);


  const totalUsers = filteredUsers?.length || 0;
  const totalPages = Math.ceil(totalUsers / pageSize);

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [pageSize, totalPages, page]);

  // if (!data) return <p>no data</p>;

  //woek on loading
  if (isPending) return <UsersSkeleton/>;


  const startIdx = (page - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const paginatedUsers = filteredUsers.slice(startIdx, endIdx);

  const cards = getUserCards(filteredUsers || []);
  return (
    <>
      <div className={style.container}>
        <h1>Users</h1>
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
            data={paginatedUsers || []}
            render={(user) => <UserTableRow key={user.id} user={user} />}
          />
        </UserTable>

        <Pagination
          pageSize={pageSize}
          total={totalUsers}
          currentPage={page}
          totalPages={totalPages}
          onPageSizeChange={(size) => setPageSize(size)}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
      <FilterPanel
        isOpen={isFilterOpen}
        setIsOpen={setIsFilterOpen}
        onFilter={(data) => {
          setFilters(data);
          setPage(1);
        }}
      />
    </>
  );
}

export default User;
