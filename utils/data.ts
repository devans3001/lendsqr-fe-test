
import { FaUsers } from "react-icons/fa";
import { UserCardType } from "@/types/type";
import { HiMiniUsers } from "react-icons/hi2";
import { TbFileDatabase } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";

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

export const dummyData = [
    {
        id: 1,
        organization: "Lendsqr",
        name: "Adedeji",
        email: "adedeji@lendsqr.com",
        phone: "08078030721",
        date: "May 15, 2020 10:00 AM",
        status: "active",
    },
    {
        id: 2,
        organization: "Paystack",
        name: "Chinonso",
        email: "chinonso@paystack.com",
        phone: "08012345678",
        date: "June 10, 2021 09:30 AM",
        status: "inactive",
    },
    {
        id: 3,
        organization: "Flutterwave",
        name: "Amina",
        email: "amina@flutterwave.com",
        phone: "08123456789",
        date: "July 20, 2022 02:15 PM",
        status: "pending",
    },
    {
        id: 4,
        organization: "Carbon",
        name: "Ifeanyi",
        email: "ifeanyi@carbon.com",
        phone: "08087654321",
        date: "August 5, 2021 11:45 AM",
        status: "blacklist",
    },
    {
        id: 5,
        organization: "Kuda",
        name: "Ngozi",
        email: "ngozi@kuda.com",
        phone: "08099887766",
        date: "September 12, 2022 04:20 PM",
        status: "active",
    },
    {
        id: 6,
        organization: "Opay",
        name: "Bola",
        email: "bola@opay.com",
        phone: "08112233445",
        date: "October 3, 2020 08:10 AM",
        status: "inactive",
    },
    {
        id: 7,
        organization: "Lendsqr",
        name: "Tunde",
        email: "tunde@lendsqr.com",
        phone: "08033445566",
        date: "November 18, 2021 05:55 PM",
        status: "pending",
    },
    {
        id: 8,
        organization: "Paystack",
        name: "Zainab",
        email: "zainab@paystack.com",
        phone: "08055667788",
        date: "December 25, 2022 12:00 PM",
        status: "blacklist",
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
} 


export const personalInfo = [
  { label: "Full Name", value: "Grace Effiom" },
  { label: "Phone Number", value: "07060780922" },
  { label: "Email Address", value: "grace@gmail.com" },
  { label: "BVN", value: "07060780922" },
  { label: "Gender", value: "Female" },
  { label: "Marital Status", value: "Single" },
  { label: "Children", value: "None" },
  { label: "Type of Residence", value: "Parent's Apartment" }
];


export const guarantorInfo = [
  { label: "Full Name", value: "Debby Ogana" },
  { label: "Phone Number", value: "07060780922" },
  { label: "Email Address", value: "debby@gmail.com" },
  { label: "Relationship", value: "Sister" }
];



export const socialInfo = [
  { label: "Twitter", value: "@grace_effiom" },
  { label: "Facebook", value: "Grace Effiom" },
  { label: "Instagram", value: "@grace_effiom" }
];

export const educationEmploymentInfo = [
  { label: "Level of Education", value: "B.Sc" },
  { label: "Employment Status", value: "Employed" },
  { label: "Sector of Employment", value: "FinTech" },
  { label: "Duration of Employment", value: "2 years" },
  { label: "Office Email", value: "grace@lendsqr.com" },
  { label: "Monthly Income", value: "₦200,000.00 - ₦400,000.00" },
  { label: "Loan Repayment", value: "40,000" }
];
