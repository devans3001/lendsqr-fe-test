"use client";
import UserCard from "@/components/card";

import style from "./users.module.css";
import { FaUsers } from "react-icons/fa";
import { UserCardType } from "@/types/type";
import { HiMiniUsers } from "react-icons/hi2";
import { TbFileDatabase } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";
import UserTable from "@/components/UserTable";
import { MdFilterList } from "react-icons/md";

const cards: UserCardType[] = [
  {
    title: "users",
    icon: HiMiniUsers,
    num: 2453,
    foreground: "rgba(223, 24, 255, 1)",
    background: "rgba(224, 24, 255, 0.20)",
  },
  {
    title: "active users",
    icon: FaUsers,
    num: 2453,
    foreground: "rgba(87, 24, 255, 1)",
    background: "rgba(87, 24, 255, 0.10)",
  },
  {
    title: "users with loan",
    icon: TbFileDatabase,
    num: 12453,
    foreground: "rgba(245, 95, 68, 1)",
    background: "rgba(245, 95, 68, 0.10)",
  },
  {
    title: "users with savings",
    icon: LiaCoinsSolid,
    num: 102453,
    foreground: "rgba(255, 51, 102, 1)",
    background: "rgba(255, 51, 102, 0.10)",
  },
];

const tableHeaders = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
  "",
];

const dummyData = [
  {
    org: "Lendsqr",
    name: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone: "08078030721",
    joined: "May 15, 2020 10:00 AM",
    status: "Inactive",
  },
];

function User() {
  return (
    <div className={style.container}>
      <h1>User</h1>
      <div className={style.userCards}>
        {cards.map((card) => (
          <UserCard key={card.title} card={card} />
        ))}
      </div>

      {/* <UserTable>
        <UserTable.Header
          data={tableHeaders}
          render={(item, i) => {
            const isLast = i === tableHeaders.length - 1;


            return (
              <th key={item}>
                {item}{!isLast && <MdFilterList />}{" "}
              </th>
            );
          }}
        />
      </UserTable> */}
    </div>
  );
}

export default User;
