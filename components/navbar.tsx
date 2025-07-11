
"use client"

import Lastchild from "./lastchild"
import Logo from "./logo"
import Searchbar from "./searchbar"

function Navbar() {
  return (
    <nav className="navContainer">

        <Logo classname="nav-logo"/>
        <Searchbar/>
        <Lastchild/>
    </nav>
  )
}

export default Navbar