

import { IoSearchOutline } from "react-icons/io5";

function Searchbar() {
  return (
    <div className="searchBar">
        <input type='text' placeholder="Search for anything"/>
        <button>
            <IoSearchOutline size={20} color="#fff"/>
        </button>
    </div>
  )
}

export default Searchbar