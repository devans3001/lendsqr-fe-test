"use client";
import React, { useEffect, useRef, useState } from "react";
import UserTable from "./UserTable";
import { User } from "@/types/type";
import { BsThreeDotsVertical } from "react-icons/bs";
import { STATUS_STYLES } from "@/utils/data";
import { StatusBadge } from "./StatusBadge";
import { FiEye } from "react-icons/fi";
import { FaUserCheck, FaUserTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useLocalStorageState } from "@/hooks/useLocalStorage";
import { format } from "date-fns";

function UserTableRow({ user }: { user: User }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { id, tableData } = user;

  const router = useRouter();

  const [, setValue] = useLocalStorageState<User | null>(null, `selectedUser`);

  const handleClick = () => {
    setValue(user);
    setOpen(false);
    router.push(`/dashboard/users/${id}`);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <UserTable.Row>
      {Object.keys(tableData).map((key) => {
        if (key === "status") {
          const userStatus = tableData[
            key
          ].toLowerCase() as keyof typeof STATUS_STYLES;

          return (
            <td key={key}>
              <StatusBadge status={userStatus} />
            </td>
          );
        }

        // Format if it's a date field and value is a valid ISO string
        if (key === "date") {
          return (
            <td key={key}>{format(tableData[key], "MMM d, yyyy, h:mm a")}</td>
          );
        }
        return <td key={key}>{tableData[key as keyof typeof tableData]}</td>;
      })}
      <td>
        <div className="row-actions-wrapper" ref={menuRef}>
          <BsThreeDotsVertical onClick={() => setOpen((prev) => !prev)} />

          {open && (
            <div className="row-actions-menu">
              <p className="row-actions-item" onClick={handleClick}>
                <FiEye /> View Details
              </p>
              <p className="row-actions-item">
                <FaUserTimes /> Blacklist User
              </p>
              <p className="row-actions-item">
                <FaUserCheck /> Activate User
              </p>
            </div>
          )}
        </div>
      </td>
    </UserTable.Row>
  );
}

export default UserTableRow;
