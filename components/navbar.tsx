"use client";

import UserNavWidget from "./userNavWidget";
import Logo from "./logo";
import Searchbar from "./searchbar";
import { RefObject } from "react";
import { IoMenu } from "react-icons/io5";

function Navbar({
  navRef,
  setIsSidebarOpen,
}: {
  navRef: RefObject<HTMLElement | null>;
  setIsSidebarOpen: (open:boolean) => void;
}) {
  return (
    <nav className="navContainer" ref={navRef}>
      <Logo classname="nav-logo" />
      <IoMenu size={24} color="#213F7D" onClick={()=>setIsSidebarOpen(true)} />
      <Searchbar />
      <UserNavWidget />
    </nav>
  );
}

export default Navbar;
