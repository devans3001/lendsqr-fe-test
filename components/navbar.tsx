"use client";

import UserNavWidget from "./userNavWidget";
import Logo from "./logo";
import Searchbar from "./searchbar";
import { RefObject } from "react";
import { IoMenu } from "react-icons/io5";


function Navbar({navRef}:{navRef:RefObject<HTMLElement | null>}) {
 

  return (
    <nav className="navContainer" ref={navRef}>
      <Logo classname="nav-logo nav-hide" />
      <IoMenu size={24} color="#213F7D"/>
      <Searchbar />
      <UserNavWidget />
    </nav>
  );
}

export default Navbar;
