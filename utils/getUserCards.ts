import { HiMiniUsers } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { TbFileDatabase } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";
import { User, UserCardType } from "@/types/type";

export function getUserCards(users: User[]): UserCardType[] {
  const total = users.length;
  const active = users.filter((u) => u.tableData.status === "active").length;
  const withLoan = users.filter((u) => u.hasLoan).length;
  const withSavings = users.filter((u) => u.hasSavings).length;

  return [
    {
      title: "users",
      icon: HiMiniUsers,
      num: total,
      foreground: "rgba(223, 24, 255, 1)",
      background: "rgba(224, 24, 255, 0.20)",
    },
    {
      title: "active users",
      icon: FaUsers,
      num: active,
      foreground: "rgba(87, 24, 255, 1)",
      background: "rgba(87, 24, 255, 0.10)",
    },
    {
      title: "users with loan",
      icon: TbFileDatabase,
      num: withLoan,
      foreground: "rgba(245, 95, 68, 1)",
      background: "rgba(245, 95, 68, 0.10)",
    },
    {
      title: "users with savings",
      icon: LiaCoinsSolid,
      num: withSavings,
      foreground: "rgba(255, 51, 102, 1)",
      background: "rgba(255, 51, 102, 0.10)",
    },
  ];
}
