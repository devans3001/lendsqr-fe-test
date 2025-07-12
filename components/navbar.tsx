"use client";

import UserNavWidget from "./userNavWidget";
import Logo from "./logo";
import Searchbar from "./searchbar";
import { RefObject } from "react";


function Navbar({navRef}:{navRef:RefObject<HTMLElement | null>}) {
 

  return (
    <nav className="navContainer" ref={navRef}>
      <Logo classname="nav-logo" />
      <Searchbar />
      <UserNavWidget />
    </nav>
  );
}

export default Navbar;
