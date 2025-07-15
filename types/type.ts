import { IconType } from "react-icons";

export interface LoginDetails {
  email: string;
  password: string;
}
export interface MenuItem {
  title: string;
  subItems?: {
    title: string;
    icon: IconType;
    path?: string | undefined;
  }[];
}
export interface UserCardType {
  icon: IconType;
  title: string;
  num: number;
  background: string;
  foreground: string;
}

export interface UserTableValueType {
  organization: string;
  name: string;
  email: string;
  date: string;
  phone: string;
  status: string;
}

export interface User{
  id: string;
  tableData: UserTableValueType;
  profile: {
    fullName: string;
    phoneNumber: string;
    email: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    residenceType: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: [string, string];
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantors: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  }[];
};
