
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


export interface UserCardType{
  icon:IconType;
  title:string;
  num:number;
  background: string;
  foreground: string
}