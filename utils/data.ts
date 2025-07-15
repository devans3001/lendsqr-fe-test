import { FaUsers } from "react-icons/fa";
import { UserCardType } from "@/types/type";
import { HiMiniUsers } from "react-icons/hi2";
import { TbFileDatabase } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";
import type { User } from "@/types/type";

export const cards: UserCardType[] = [
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

export const tableHeaders = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
  "",
];

export const dummyData: User[] = [
  {
    id: "1",
    hasLoan:true,
    hasSavings:true,
    tableData: {
      organization: "Lendsqr",
      name: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone: "08078030721",
      date: "May 15, 2020 10:00 AM",
      status: "active",
    },
    profile: {
      fullName: "Adedeji",
      phoneNumber: "08078030721",
      email: "adedeji@lendsqr.com",
      bvn: "12345678901",
      gender: "Male",
      maritalStatus: "Single",
      children: "None",
      residenceType: "Parent's Apartment",
    },
    education: {
      level: "B.Sc",
      employmentStatus: "Employed",
      sector: "FinTech",
      duration: "2 years",
      officeEmail: "adedeji@lendsqr.com",
      monthlyIncome: ["₦200,000.00", "₦400,000.00"],
      loanRepayment: "40,000",
    },
    socials: {
      twitter: "@adedeji",
      facebook: "Adedeji",
      instagram: "@adedeji",
    },
    guarantors: [
      {
        fullName: "Debby Ogana",
        phoneNumber: "07060780922",
        email: "debby@gmail.com",
        relationship: "Sister",
      },
      {
        fullName: "Debby gay",
        phoneNumber: "07060780922",
        email: "debby@gmail.com",
        relationship: "Sister",
      },
    ],
  },
];

export const STATUS_STYLES = {
  active: {
    label: "Active",
    className: "status--active",
    code: "#39CDCC",
  },
  pending: {
    label: "Pending",
    className: "status--pending",
    code: "#E9B200",
  },
  inactive: {
    label: "Inactive",
    className: "status--inactive",
    code: "#545F7D",
  },
  blacklist: {
    label: "Blacklist",
    className: "status--blacklist",
    code: "#E4033B",
  },
};
