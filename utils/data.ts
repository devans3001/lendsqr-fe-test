
import type { User } from "@/types/type";


export const tableHeaders = [
  "Organization",
  "Username",
  "Email",
  "Phone Number",
  "Date Joined",
  "Status",
  "",
];

//FOR TEST PURPOSES
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
