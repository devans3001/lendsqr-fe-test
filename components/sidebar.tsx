"use client";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { RiBriefcase2Fill } from "react-icons/ri";
import { BsHouseDoor } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logout from "./auth/logout";
import { sideMenu } from "@/utils/sidebarData";
import { MenuItem } from "@/types/type";

function Sidebar({ navbarHeight }: { navbarHeight: number }) {
  const pathname = usePathname();

  const sidebarStyle = {
    height: `calc(100vh - ${navbarHeight}px)`,
  };
  return (
    <div className="sideContainer" style={sidebarStyle}>
      <p className="sideItem">
        <RiBriefcase2Fill />
        <span>switch organization</span>
        <MdArrowDropDown />
      </p>
      <p
        className={`sideItem ${
          pathname.endsWith("dashboard") ? "sideActive" : ""
        } `}
      >
        <BsHouseDoor />
        <span>dashboard</span>
      </p>

      {sideMenu.map((item) => (
        <SideItem item={item} key={item.title} pathname={pathname} />
      ))}

      <Logout/>
    </div>
  );
}

export default Sidebar;

function SideItem({ item, pathname }: { item: MenuItem; pathname: string }) {
  const { title, subItems } = item;
  return (
    <div style={{marginTop:"1.5em"}}>
      <h4 className="sideItem">{title}</h4>
      {subItems?.map((ele) => (
        <Link
          href={`/dashboard${ele.path}`}
          key={ele.title}
          className={`sideItem ${
            pathname.includes((ele.path ?? "").slice(0)) ? "sideActive" : ""
          } `}
        >
          <ele.icon />
          <span>{ele.title}</span>
        </Link>
      ))}
    </div>
  );
}
