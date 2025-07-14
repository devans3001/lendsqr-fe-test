"use client";
import React, { useEffect, useRef, useState } from "react";
import UserTable from "./UserTable";
import { UserTableValueType } from "@/types/type";
import { BsThreeDotsVertical } from "react-icons/bs";
import { STATUS_STYLES } from "@/utils/data";
import { StatusBadge } from "./StatusBadge";
import { FiEye } from "react-icons/fi";
import { FaUserCheck, FaUserTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

function UserTableRow({ user }: { user: UserTableValueType }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const {id, ...rest} = user

  const handleClick = ()=>{
    router.push(`/dashboard/users/${id}`)
  }


  return (
    <UserTable.Row>
      {Object.keys(rest).map((key) => {
        if (key === "status") {
          const userStatus = user[
            key
          ].toLowerCase() as keyof typeof STATUS_STYLES;

          return (
            <td key={key}>
              <StatusBadge status={userStatus} />
            </td>
          );
        }
        return (
          <td key={key}>
            {user[key as keyof UserTableValueType] as React.ReactNode}
          </td>
        );
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
