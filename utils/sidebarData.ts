import { MenuItem } from "@/types/type";
import { AiOutlineBank } from "react-icons/ai";
import {
    FaClipboardList,
    FaCoins,
  FaHandHoldingUsd,
  FaPiggyBank,
  FaRegChartBar,
  FaRegHandshake,
  FaUserCheck,
  FaUserCog,
  FaUserTimes,
} from "react-icons/fa";
import { FaSackDollar, FaSliders } from "react-icons/fa6";
import { GiCarWheel } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import { HiMiniPercentBadge } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import { LuScroll } from "react-icons/lu";
import { PiFanDuotone } from "react-icons/pi";
import { RiBriefcase2Fill } from "react-icons/ri";


export const sideMenu: MenuItem[] = [
  {
    title: "customer",
     subItems: [
      { title: 'Users', icon: HiOutlineUsers, path: '/users' },
      { title: 'Guarantors', icon: IoIosPeople, path: '/guarantors' },
      { title: 'Loans', icon: FaSackDollar, path: '/loans' },
      { title: 'Decision Models', icon: FaRegHandshake, path: '/decisions' },
      { title: 'Savings', icon: FaPiggyBank, path: '/savings' },
      { title: 'Loan Requests', icon: FaHandHoldingUsd, path: '/loan-requests' },
      { title: 'Whitelist', icon: FaUserCheck, path: '/whitelist' },
      { title: 'Karma', icon: FaUserTimes, path: '/karma' }
    ]
  },
  {
    title: 'Businesses',
    subItems: [
      { title: 'Organization', path: '/organization', icon: RiBriefcase2Fill },
      { title: 'Loan Products', path: '/loan-products', icon: FaHandHoldingUsd },
      { title: 'Savings Products', path: '/savings-products', icon: AiOutlineBank },
      { title: 'Fees and Charges', path: '/fees-charges', icon: FaCoins },
      { title: 'Transactions', path: '/transactions', icon: GrTransaction },
      { title: 'Services', path: '/services', icon: PiFanDuotone },
      { title: 'Service Account', path: '/service-account', icon: FaUserCog },
      { title: 'Settlements', path: '/settlements', icon: LuScroll },
      { title: 'Reports', path: '/reports', icon: FaRegChartBar }
    ]
  },
  {
    title: 'Settings',
    subItems: [
      { title: 'Preferences', path: '/preferences', icon: FaSliders },
      { title: 'Fees and Pricing', path: '/fees-pricing', icon: HiMiniPercentBadge },
      { title: 'Audit Logs', path: '/audit-logs', icon: FaClipboardList },
      { title: 'Systems Messages', path: '/audit-logs', icon: GiCarWheel }
    ]
  }
];
