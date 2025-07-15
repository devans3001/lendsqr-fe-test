"use client";
import React, { useRef } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { RiBriefcase2Fill } from "react-icons/ri";
import { BsHouseDoor } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Logout from "./auth/logout";
import { sideMenu } from "@/utils/sidebarData";
import { useClickOutside } from "@/hooks/useOnClickOutside";
import Logo from "./logo";
import { SideItem } from "./SideItem";
import { IoClose } from "react-icons/io5";



// we about to ask secind gpt to combine them 

function SidebarMobile({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen?: boolean;
  setIsSidebarOpen?: (val: boolean) => void;
}) {
  const pathname = usePathname();

  const panelRef = useRef<HTMLDivElement>(null);

  useClickOutside(panelRef, () => {
    if (setIsSidebarOpen) setIsSidebarOpen(false);
  });

  // we have to make this reusable
  return (
    <>
      <div
        className={`panel_overlay ${
          isSidebarOpen ? "panel_overlay--active" : ""
        }`}
      />

      <div
        ref={panelRef}
        className={`side_panel ${isSidebarOpen ? "side_panel--open" : ""}`}
      >
        <Logo classname="side_panel--logo" />
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

        <Logout />

        <p
          className="side_panel--close"
          onClick={() => {
            if (setIsSidebarOpen) setIsSidebarOpen(false);
          }}
        >
          <IoClose size={24} />
        </p>
      </div>
    </>
  );
}

export default SidebarMobile;
