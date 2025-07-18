"use client";
import UserCard from "@/components/card";
import style from "./users.module.css";
import UserTable from "@/components/UserTable";
import { tableHeaders } from "@/utils/data";
import UserHeaderRow from "@/components/UserHeaderRow";
import { useEffect, useMemo, useState } from "react";
import FilterPanel from "@/components/FilterPanel";
import UserTableRow from "@/components/UserTableRow";
import { useUser } from "@/hooks/useUsers";
import { Pagination } from "@/components/PaginationControls";
import { getUserCards } from "@/utils/getUserCards";
import { UserTableValueType } from "@/types/type";
import { filterUsers } from "@/utils/filterUser";
import UsersSkeleton from "./UsersSkeleton";
import { sortUsers } from "@/utils/sortUser";
import { useSearchParamsHook } from "@/hooks/useSearchParamHook";
import { usePageTitle } from "@/hooks/usePageTitle";

/**
 * Renders the Users dashboard page, providing user listing, filtering, sorting, and pagination functionalities.
 *
 * - Fetches user data via the `useUser` hook.
 * - Allows filtering users using a filter panel.
 * - Supports sorting by table headers, with sort state persisted in URL search params.
 * - Displays user summary cards and a paginated, sortable user table.
 * - Handles loading state with a skeleton component.
 * - Updates page title on mount.
 *
 *
 */

function User() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<Partial<UserTableValueType>>({});
  const { users, isPending } = useUser();

  const filteredUsers = useMemo(
    () => filterUsers(users, filters),
    [users, filters]
  );

  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  const { getParam, setParam, setMultipleParams } = useSearchParamsHook();

  const sortKey = getParam("sortKey");
  const sortOrder = (getParam("sortOrder") as "asc" | "desc") || "asc";

  const sortedUsers = useMemo(
    () => sortUsers(filteredUsers, sortKey, sortOrder),
    [filteredUsers, sortKey, sortOrder]
  );

  const totalUsers = sortedUsers?.length || 0;
  const totalPages = Math.ceil(totalUsers / pageSize);

  usePageTitle("Dashboard | Lendsqr");

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [pageSize, totalPages, page]);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setParam("sortOrder", sortOrder === "asc" ? "desc" : "asc");
    } else {
      setMultipleParams({ sortKey: key, sortOrder: "asc" });
    }
  };

  const paginatedUsers = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return sortedUsers.slice(start, end);
  }, [sortedUsers, page, pageSize, sortKey, sortOrder]);

  const cards = useMemo(() => getUserCards(sortedUsers), [sortedUsers]);

  if (isPending) return <UsersSkeleton />;

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
                onSortClick={() => handleSort(item)}
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
