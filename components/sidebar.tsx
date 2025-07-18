"use client";
import React, { useRef } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { RiBriefcase2Fill } from "react-icons/ri";
import { BsHouseDoor } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logout from "./logout";
import { sideMenu } from "@/utils/sidebarData";
import { MenuItem } from "@/types/type";
import Logo from "./logo";
import { useClickOutside } from "@/hooks/useOnClickOutside";

export default function Sidebar({
  isMobile = false,
  isOpen = false,
  setIsOpen,
  heightStyle,
}: {
  isMobile?: boolean;
  isOpen?: boolean;
  setIsOpen?: (val: boolean) => void;
  heightStyle?: React.CSSProperties;
}) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  useClickOutside(panelRef, () => {
    if (isMobile && setIsOpen) setIsOpen(false);
  });

  return (
    <>
      {isMobile && (
        <div
          className={`panel_overlay ${isOpen ? "panel_overlay--active" : ""}`}
        />
      )}

      <div
        ref={panelRef}
        className={`sideContainer ${isMobile ? "side_panel" : ""} ${
          isMobile && isOpen ? "side_panel--open" : ""
        }`}
        style={!isMobile ? heightStyle : undefined}
      >
        {isMobile && <Logo classname="side_panel--logo" />}

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
          <SideItem
            item={item}
            key={item.title}
            pathname={pathname}
            isMobile={isMobile}
            setIsOpen={setIsOpen}
          />
        ))}

        <Logout />

        {/* Mobile close icon */}
        {isMobile && (
          <p
            className="side_panel--close"
            onClick={() => setIsOpen && setIsOpen(false)}
          >
            <IoClose size={24} />
          </p>
        )}
      </div>
    </>
  );
}

function SideItem({
  item,
  pathname,
  isMobile,
  setIsOpen
}: {
  item: MenuItem;
  pathname: string;
  isMobile?: boolean;
  setIsOpen?:(val: boolean) => void
}) {
  const { title, subItems } = item;

  const handleClosePanel = () => {
    if (item && isMobile && setIsOpen) setIsOpen(false);
  }
  return (
    <div style={{ marginTop: "1.5em" }}>
      <h4 className="sideItem">{title}</h4>
      {subItems?.map((ele) => (
        <Link
          href={`/dashboard${ele.path}`}
          key={ele.title}
          onClick={handleClosePanel}
          className={`sideItem ${
            pathname.includes(ele.path ?? "") ? "sideActive" : ""
          } `}
        >
          <ele.icon />
          <span>{ele.title}</span>
        </Link>
      ))}
    </div>
  );
}
